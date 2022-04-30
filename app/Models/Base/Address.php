<?php

namespace App\Models\Base;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HasBaseOwner;
use App\Traits\HasBaseTable;

class Address extends Model 
{
    use SoftDeletes, HasBaseOwner, HasBaseTable;

    protected $table = 'addresses';
    public $timestamps = true;
    protected $dates = ['deleted_at'];

    protected $casts = [
        'is_default' => 'boolean'
    ];

    protected $guarded =['id', 'uuid'];

}