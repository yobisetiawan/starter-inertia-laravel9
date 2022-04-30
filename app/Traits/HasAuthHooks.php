<?php

namespace App\Traits;

use App\Events\UserResetPasswordEvent;

trait HasAuthHooks
{

    public function __beforeRegister()
    {
        return false;
    }

    public function __afterRegister()
    {
        return false;
    }

    public function __afterForgotPassword()
    {
        return false;
    }

    public function __afterVerifyResetPassword()
    {
        return false;
    }


    public function __beforeResetPassword()
    {
        return false;
    }

    public function __afterResetPassword()
    {
        return false;
    }
}
