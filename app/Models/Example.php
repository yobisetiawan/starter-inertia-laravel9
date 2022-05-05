<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HasBaseOwner;
use App\Traits\HasBaseTable;

class Example extends Model 
{
    use SoftDeletes, HasBaseOwner, HasBaseTable;

    protected $table = 'examples';
    public $timestamps = true;
    protected $dates = ['deleted_at'];

    protected $casts = [
        'is_default' => 'boolean',
        'multi_select' => 'array',
        'multi_check' => 'array'
    ];

    protected $guarded =['id', 'uuid'];

}