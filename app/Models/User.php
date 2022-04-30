<?php

namespace App\Models;

use App\Constants\FileUploadConst;
use App\Models\Base\Address;
use App\Models\Base\FileinfoPivot;
use App\Traits\HasBaseOwner;
use App\Traits\HasBaseTable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes, HasBaseTable, HasBaseOwner; 

    protected $guarded =['id', 'uuid'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }

    public function avatar(){
        return $this->morphOne(FileinfoPivot::class, 'fileable')->where('slug', FileUploadConst::USER_AVATAR_SLUG);
    }

}
