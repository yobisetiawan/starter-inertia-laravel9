<?php

namespace App\Http\Controllers\Web\Data;

use App\Constants\FileUploadConst;
use App\Http\Modules\BaseInertiaCrud;
use App\Http\Requests\Web\Data\ExampleRequest;
use App\Models\Example;
use App\Services\UploadService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ExampleController extends BaseInertiaCrud
{

    public $model = Example::class;

    public $storeValidator = ExampleRequest::class;
    public $updateValidator = ExampleRequest::class;

    public $searchAble = ['title', 'description'];


    public $viewPath = 'Data/Example';

    public function __prepareQueryList($query)
    {
        if ($gender = request('gender')) {
            $query->where('gender', $gender);
        }
        return $query;
    }


    public function __prepareDataStore($data)
    {
        $data['date'] = Carbon::parse($data['date'])->format('Y-m-d');

        unset($data['file']);
        unset($data['multi_file']);
        unset($data['webcam']);

        return $data;
    }

    public function __prepareDataUpdate($data)
    {
        return $this->__prepareDataStore($data);
    }

    public function __redirectSuccess()
    {
        return redirect()->route('web.data.example.index');
    }

    public function __afterStore()
    {
        Log::info( $this->requestData->input('webcam'));

        if ($file = $this->requestData->input('webcam')) {
            $upload = new UploadService(
                $file,
                FileUploadConst::EXAMPLE_FILE_WEBCAM_PATH,
                $this->row->uuid
            );

            $upload->uploadBase64();

            $this->row->update(['webcam' => $upload->getURL()]);
        }


        if ($file = $this->requestData->file('file')) {
            $upload = new UploadService(
                $file,
                FileUploadConst::EXAMPLE_FILE_PATH,
                $this->row->uuid
            );

            $upload->uploadResize(300);

            $this->row->update(['file' => $upload->getURL()]);
        }


        if ($files = $this->requestData->file('multi_file')) {
            $multi_file = [];

            foreach ($files as $key => $file) {
                $upload = new UploadService(
                    $file,
                    FileUploadConst::EXAMPLE_FILE_PATH,
                    $this->row->uuid . '-' . $key
                );

                $upload->uploadResize(300);
                $multi_file[] = $upload->getURL();
            }

            $this->row->update(['multi_file' => $multi_file]);
        }
    }

    public function __afterUpdate()
    {
        $this->__afterStore();
    }
}
