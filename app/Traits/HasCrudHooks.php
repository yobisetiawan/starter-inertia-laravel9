<?php

namespace App\Traits;

trait HasCrudHooks
{


    public function __beforeStore()
    {
        return false;
    }

    public function __afterStore()
    {
        return false;
    }


    public function __beforeUpdate()
    {
        return false;
    }


    public function __afterUpdate()
    {
        return false;
    }

    public function __beforeDestroy()
    {
        return false;
    }

    public function __afterDestroy()
    {
        return false;
    }
}
