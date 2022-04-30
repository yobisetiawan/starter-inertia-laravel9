<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait HasCrudPrepareQuery
{

    public function __prepareQuerySearchAbleList($query)
    {
        $request = $this->requestData;

        if ($q = $request->query('q')) {

            $query->where(function ($qq) use ($q) {
                foreach ($this->searchAble as $v) {
                    if (Str::contains($v, '.')) {
                        $ex = explode('.', $v);

                        $rel = implode('.', array_values(array_slice($ex, 0, count($ex) - 1)));

                        $qq->orWhereHas($rel, function ($qqq) use ($q, $ex) {
                            $qqq->whereRaw('LOWER(' . $ex[count($ex) - 1] . ') like ?', ['%' . strtolower($q) . '%']);
                        });
                    } else {
                        $qq->orWhereRaw('LOWER(' . $v . ') like ?', ['%' . strtolower($q) . '%']);
                    }
                }
            });
        }

        return $query;
    }

    public function __prepareQueryListType($query)
    {
        $request = $this->requestData;

        return $request->query('type') == 'pagination' ? $query->paginate($this->paginationPerPage) : $query->get();
    }

    public function __prepareListPaginationAppend($query)
    {

        return  $query;
    }

    public function __prepareQueryRelationList($query)
    {
        foreach ($this->relationList as $value) {
            $query->with($value);
        }

        $this->__prepareQueryUnLockRelations($query);

        return $query;
    }

    public function __prepareQueryList($query)
    {
        return $query;
    }

    public function __prepareQuerySortAndLimit($query)
    {
        $request = $this->requestData;

        $sort_by = $request->query('sort_by');

        $order_by = $request->query('order_by');

        $type = $request->query('type');

        $limit = $request->query('limit');


        $order_by = !empty($order_by) ?  $order_by : $this->defaultOrder;

        $sort_by = !empty($sort_by) ?  $sort_by : $this->defaultSort;

        $query->orderBy($order_by, $sort_by);

        if (!empty($limit)) {

            $this->paginationPerPage = (int) $limit;
            if ($type != 'pagination') {
                $query->limit($this->paginationPerPage);
            }
        }

        return $query;
    }

    public function __prepareDataStore($data)
    {
        return $data;
    }

    public function __prepareQueryRelationShow($query)
    {
        foreach ($this->relationShow as $value) {
            $query->with($value);
        }

        $this->__prepareQueryUnLockRelations($query);

        return $query;
    }

    public function __prepareLoadRelation($row)
    {
        if (!$this->lockRelationParam) {
            $relations = request('relations', '');
            if (!empty($relations)) {
                $exp = explode(',', $relations); 
                $row->load($exp);
            }
        }

        return $row;
    }


    public function __prepareQueryUnLockRelations($query)
    {
        if (!$this->lockRelationParam) {
            $relations = request('relations', '');
            if (!empty($relations)) {
                $exp = explode(',', $relations);
                foreach ($exp as $relation) {
                    $query->with($relation);
                }
            }
        }

        return $query;
    }

    public function __prepareQueryRowShow($query)
    {
        return $query;
    }


    public function __prepareDataUpdate($data)
    {
        return $data;
    }

    public function __prepareQueryRowUpdate($query)
    {
        return $query;
    }

    public function __prepareQueryRowDestroy($query)
    {
        return $query;
    }
}
