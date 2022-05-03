<?php

namespace App\Http\Controllers\Web\Data;

use App\Http\Modules\BaseInertiaCrud;
use App\Http\Requests\Web\Profile\ChangeProfileRequest;
use App\Models\Example; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExampleController extends BaseInertiaCrud
{

    public $model = Example::class;

    public $updateValidator = ChangeProfileRequest::class;

    public $viewPath = 'Data/Example';

    
}
