<?php

namespace App\Http\Controllers\Api\V1\Auth;


use App\Http\Modules\BaseAuth;
use App\Http\Requests\Api\V1\Auth\ApiForgotPasswordRequest;
use App\Http\Requests\Api\V1\Auth\ApiLoginRequest;
use App\Http\Requests\Api\V1\Auth\ApiRegisterRequest;
use App\Http\Requests\Api\V1\Auth\ApiResetPasswordRequest;
use App\Http\Requests\Api\V1\Auth\ApiVerifyPasswordRequest;
use App\Repositories\Auth\ForgotPasswordRepository;
use App\Repositories\Auth\ResetPasswordRepository;
use App\Repositories\Auth\VerifyPasswordRepository;

class AuthController extends BaseAuth
{
    public $validatorLogin = ApiLoginRequest::class;
    public $validatorRegister = ApiRegisterRequest::class;
    public $validatorForgotPassword = ApiForgotPasswordRequest::class;
    public $validatorResetPassword = ApiResetPasswordRequest::class;
    public $validatorVerifyResetPassword = ApiVerifyPasswordRequest::class;

    public function __afterForgotPassword()
    {
        $repo = new ForgotPasswordRepository;
        $repo->sendNotifForgotPassword($this->user);
    }

    public function __afterVerifyResetPassword()
    {
        $repo = new VerifyPasswordRepository;
        $repo->verifyResetPassword($this->user, request('code'));
    }

    public function __beforeResetPassword()
    {
        $this->__afterVerifyResetPassword();
    }

    public function __afterResetPassword()
    {
        $repo =  new ResetPasswordRepository;
        $repo->notifyAfterResetPassword($this->user);
    }
}
