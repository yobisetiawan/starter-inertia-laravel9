<?php

namespace App\Http\Controllers\Web\Profile;

use App\Http\Modules\BaseWebCrud;
use App\Http\Requests\Web\Profile\ChangePasswordRequest;
use App\Http\Requests\Web\Profile\ChangeProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends BaseWebCrud
{

    public $model = User::class;

    public $updateValidator = ChangePasswordRequest::class;

    public $viewPath = 'pages.profile.password';

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

    public function __prepareDataUpdate($data)
    {
        $data['password'] = Hash::make($data['password']);
        return $data;
    }
}
