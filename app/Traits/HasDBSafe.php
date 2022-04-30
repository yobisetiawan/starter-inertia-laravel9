<?php

namespace App\Traits;

use Illuminate\Support\Facades\DB;

trait HasDBSafe
{

    public function DBSafe($func)
    {
        try {
            DB::beginTransaction();

            $data = $func();

            DB::commit();
            return $data;
        } catch (\Throwable $th) {

            DB::rollBack();
            $this->__errorDBSafe($th);
        }
    }

    public function __errorDBSafe($th)
    {
        throw $th;
    }
}
