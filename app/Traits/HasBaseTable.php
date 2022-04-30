<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

trait HasBaseTable
{


    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            self::__setupBaseTable($model);
        });

        self::saving(function ($model) {
            self::__setupBaseTable($model);
        });
    }


    public static function __setupBaseTable($model)
    {
        if (empty($model->uuid)) {
            $model->uuid = Str::uuid()->toString();
        }

        if (empty($model->id)) {
            $model->created_by = Auth::id();
        }

        $model->updated_by = Auth::id();
    }

    public static function getId($uuid, $field = 'uuid')
    {
        if (empty($uuid)) {
            return null;
        }
        return self::where($field, $uuid)->first()->id ?? null;
    }

    public static function getOrFail($uuid, $field = 'uuid')
    {
        return self::where($field, $uuid)->firstOrFail();
    }
}
