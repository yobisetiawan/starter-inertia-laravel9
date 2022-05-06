<?php

namespace App\Http\Controllers\Web\Json;

use App\Http\Controllers\Controller;


class ExampleController extends Controller
{
    public function index()
    {
        $data = [];

        $start = (int)request('start', 1);

        for ($i = $start; $i <=  $start + 9; $i++) {
            $data[] = ['value' => $i, 'label' => 'Value After ' . $i];
        }
        return  $data;
    }
}
