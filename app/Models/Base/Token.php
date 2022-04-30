<?php

namespace App\Models\Base;

use App\Traits\HasBaseOwner;
use App\Traits\HasBaseTable;
use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    use HasBaseTable, HasBaseOwner;

    protected $guarded = ['id', 'uuid'];
    
}
