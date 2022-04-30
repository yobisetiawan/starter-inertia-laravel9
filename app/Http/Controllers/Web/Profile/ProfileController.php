<?php

namespace App\Http\Controllers\Web\Profile;

use App\Http\Controllers\Controller;
use App\Http\Modules\BaseWebCrud;
use App\Http\Requests\Web\Profile\ChangeProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends BaseWebCrud
{

    public $model = User::class;

    public $updateValidator = ChangeProfileRequest::class;

    public $viewPath = 'pages.profile';

    public function index(Request $request)
    {
        $user = Auth::user();
        return $this->edit($user->uuid);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        return $this->update($request, $user->uuid);
    }
}
