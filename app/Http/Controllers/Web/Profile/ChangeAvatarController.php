<?php

namespace App\Http\Controllers\Web\Profile;

use App\Constants\FileUploadConst;
use App\Http\Modules\BaseWebCrud;
use App\Http\Requests\Web\Profile\ChangeAvatarRequest;
use App\Http\Requests\Web\Profile\ChangePasswordRequest;
use App\Http\Requests\Web\Profile\ChangeProfileRequest;
use App\Models\User;
use App\Services\UploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChangeAvatarController extends BaseWebCrud
{

    public $model = User::class;

    public $updateValidator = ChangeAvatarRequest::class;

    public $viewPath = 'pages.profile.avatar';

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

    public function __beforeUpdate()

    {
        $upload = new UploadService(
            $this->requestData->file('avatar'),
            FileUploadConst::USER_AVATAR_PATH,
            Auth::user()->uuid
        );

        $upload->uploadResize(300);

        $this->uploaded = $upload;

        return false;
    }

    public function __afterupdate()
    {

        if ($this->uploaded) {
            $this->uploaded->saveFileInfo($this->row->avatar(), ['slug' =>  FileUploadConst::USER_AVATAR_SLUG]);
        }

        return false;
    }
}
