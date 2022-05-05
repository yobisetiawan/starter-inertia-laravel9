<?php

namespace App\Http\Controllers\Web\Data;

use App\Http\Modules\BaseInertiaCrud;
use App\Http\Requests\Web\Data\ExampleRequest;
use App\Models\Example;
use Carbon\Carbon;

class ExampleController extends BaseInertiaCrud
{

    public $model = Example::class;

    public $storeValidator = ExampleRequest::class;
    public $updateValidator = ExampleRequest::class;


    public $viewPath = 'Data/Example';


    public function __prepareDataStore($data)
    {
        $data['multi_select'] = implode(',', $data['multi_select']);
        $data['multi_check'] = implode(',', $data['multi_check']);
        $data['date'] = Carbon::parse($data['date'])->format('Y-m-d');

        return $data;
    }

    public function __redirectSuccess()
    {
        return redirect()->route('web.data.example.index');
    }
}
