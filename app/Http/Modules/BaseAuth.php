<?php

namespace App\Http\Modules;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\HasAuthErrorResult;
use App\Traits\HasAuthHooks;
use App\Traits\HasAuthPrepareQuery;
use App\Traits\HasAuthSuccessResult;
use App\Traits\HasDBSafe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;

class BaseAuth extends Controller
{

    use HasAuthSuccessResult, HasAuthErrorResult, HasAuthPrepareQuery, HasAuthHooks, HasDBSafe;

    public $user;

    public $validatorLogin;
    public $validatorRegister;
    public $validatorForgotPassword;
    public $validatorResetPassword;
    public $validatorVerifyResetPassword;

    public $requestData;

    public $passwordInputField = 'password';

    public function login(Request $request)
    {

        $query = User::query();

        $req = app($this->validatorLogin);

        $this->requestData = $req;

        $this->__prepareQueryLogin($query);

        $row = $query->first();

        if ($ress = $this->__beforeLogin()) {
            return $ress;
        }

        if ($row && Hash::check($req->input($this->passwordInputField), $row->password)) {

            $this->user = $row;

            return $this->__successLogin();
        }

        return $this->__errorLogin();
    }


    public function logout()
    {
        $row = Auth::user();

        if ($ress = $this->__beforeLogout()) {
            return $ress;
        }

        if ($row) {

            $this->user = $row;

            $row->token()->revoke();

            if ($ress = $this->__afterLogout()) {
                return $ress;
            }
        }

        return $this->__successLogout();
    }



    public function register(Request $request)
    {
        return $this->DBSafe(function () {

            $req = app($this->validatorRegister);

            $this->requestData = $req;

            $row = new User();

            $data = $req->validated();

            $data = $this->__prepareDataRegister($data);

            if ($ress = $this->__beforeRegister()) {
                return $ress;
            }

            $row->fill($data);

            $row->save();

            $this->user = $row;

            if ($ress = $this->__afterRegister()) {
                return $ress;
            }

            return $this->__successRegister();
        });
    }


    public function forgotPassword(Request $request)
    {
        $req = app($this->validatorForgotPassword);

        $this->requestData = $req;

        $query = User::query();

        $this->__prepareQueryForgotPassword($query);

        $row = $query->first();

        if ($ress = $this->__beforeForgotPassword()) {
            return $ress;
        }

        if ($row) {

            $this->user = $row;

            return $this->__successForgotPassword();
        }

        return $this->__errorForgotPassword();
    }

    public function verifyResetPassword(Request $request)
    {
        $req = app($this->validatorVerifyResetPassword);

        $this->requestData = $req;

        $query = User::query();

        $this->__prepareQueryVerifyResetPassword($query);

        $row = $query->first();

        if ($ress = $this->__beforeVerifyResetPassword()) {
            return $ress;
        }

        if ($row) {

            $this->user = $row;

            return $this->__successVerifyResetPassword();
        }

        return $this->__errorVerifyResetPassword();
    }

    public function resetPassword(Request $request)
    {
        return $this->DBSafe(function () {

            $req = app($this->validatorResetPassword);

            $this->requestData = $req;

            $query = User::query();

            $this->__prepareQueryResetPassword($query);

            $row = $query->first();

            if ($row) {

                $this->user = $row;

                $data = $req->validated();

                $data = $this->__prepareDataResetPassword($data);

                if ($ress = $this->__beforeResetPassword()) {
                    return $ress;
                }

                $row->fill($data);

                $row->save();

                return $this->__successResetPassword();
            }

            return $this->__errorResetPassword();
        });
    }
}
