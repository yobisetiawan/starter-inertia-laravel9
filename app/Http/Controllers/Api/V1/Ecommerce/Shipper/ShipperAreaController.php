<?php

namespace App\Http\Controllers\Api\V1\Ecommerce\Shipper;

use App\Http\Controllers\Controller;
use App\Services\ShipperService;
use Illuminate\Http\Request;

class ShipperAreaController extends Controller
{

    private $service;

    public function __construct()
    {
        $this->service = new ShipperService;
    }

    public function index(Request $req)
    {
        $q = $req->query('q');

        $ress = $this->service->getArea($q);

        return ['data' => $ress['data'] ?? []];
    }
}
