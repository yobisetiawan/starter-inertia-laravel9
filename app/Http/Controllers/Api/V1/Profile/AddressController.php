<?php

namespace App\Http\Controllers\Api\V1\Profile;

use App\Http\Modules\BaseCrud;
use App\Http\Requests\Api\V1\Profile\ApiAddrressRequest;
use App\Http\Resources\V1\Profile\AddressResource;
use App\Models\Base\Address;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AddressController extends BaseCrud
{

    public $model = Address::class;

    public $resource = AddressResource::class;

    public $storeValidator = ApiAddrressRequest::class;

    public $updateValidator = ApiAddrressRequest::class;


    public function __prepareQueryList($query)
    {
        $query->where('addressable_type', User::class);
        $query->where('addressable_id', Auth::id());
        return $query;
    }

    public function __prepareDataStore($data)
    {
        $data['addressable_type'] = User::class;
        $data['addressable_id'] = Auth::id();
        return $data;
    }

    public function __prepareDataUpdate($data)
    {
        return $this->__prepareDataStore($data);
    }

    public function __prepareQueryRowUpdate($query)
    {
        return $this->__prepareQueryList($query);
    }

    public function __prepareQueryRowDestroy($query)
    {
        return $this->__prepareQueryList($query);
    }
}
