<?php

namespace App\Http\Controllers\Api\V1\Profile;

use App\Constants\FileUploadConst;
use App\Http\Modules\BaseCrud;
use App\Http\Requests\Api\V1\Profile\ApiChangeAvatarRequest;
use App\Http\Resources\V1\Profile\UserResource;
use App\Models\User;
use App\Services\UploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
 

class ChangeAvatarController extends BaseCrud
{

    public $model = User::class;

    public $resource = UserResource::class;

    public $updateValidator = ApiChangeAvatarRequest::class;

    public $uploaded;

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
