<?php

namespace App\Http\Controllers\Api\V1\Ecommerce\Shipper;


use App\Http\Controllers\Controller;
use App\Http\Requests\Ecommerce\Shipper\ApiShipperShopRequest;
use App\Repositories\Ecommerce\Shipper\ShipperPricingRepository;
use App\Services\ShipperService;


class ShipperPricingController extends Controller
{

    private $service;
    private $repo;

    public function __construct()
    {
        $this->service = new ShipperService;
        $this->repo = new ShipperPricingRepository;
    }

    public function shopPricing(ApiShipperShopRequest $request)
    {
        $seller_id = $request->input('shop.seller_id');
        $items = $request->input('shop.items');

        $body = $this->repo->setBodyShopShipper($seller_id,  $items);
        $ress = $this->service->getPricingDomestic($body);

        return ['data' => $ress['data'] ?? []];
    }
}
