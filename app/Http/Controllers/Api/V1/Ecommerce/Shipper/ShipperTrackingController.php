<?php

namespace App\Http\Controllers\Api\V1\Ecommerce\Shipper;


use App\Http\Controllers\Controller;

use App\Services\ShipperService;

class ShipperTrackingController extends Controller
{

    private $service;

    public function __construct()
    {
        $this->service = new ShipperService;
    }

    public function tracking($shipper_order_id)
    {
        $ress = $this->service->tracking($shipper_order_id);

        return ['data' => $ress['data'] ?? []];
    }
}
