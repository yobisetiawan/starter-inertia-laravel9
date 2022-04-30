<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;

class ShipperService
{

    protected $api_key;
    protected $base_url;
    protected $client;

    public function __construct()
    {
        $this->api_key = env("SHIPPER_API_KEY");
        $this->base_url = env("SHIPPER_BASE_URL");
        $this->client = new \GuzzleHttp\Client();
    }

    public function getArea($q)
    {
        $ress = $this->client->request('GET', $this->base_url . '/location?keyword=' . $q, [
            'headers' => [
                'Accept' => 'application/json',
                'X-API-Key' =>  $this->api_key,
            ],
        ]);

        return json_decode($ress->getBody(), true);
    }


    /**
     * Example createOrder Shipper
     *
     *      $dt_order_shipper = [
     *            'consignee' => [
     *              'name' => "consignee name",
     *              "phone_number" => "62xxx",
     *         ],
     *        'consigner' => [
     *              'name' => "consigner name",
     *             "phone_number" => "62xxx",
     *         ],
     *         "courier" => ["rate_id" => 2],
     *        "destination" => [
     *            "address" => "Jalan kenanga",
     *              "area_id" => 12212
     *           ],
     *          "origin" => [
     *              "address" => "Jalan kenanga",
     *             "area_id" => 12623
     *          ],
     *           "package" => [
     *              "items" => [
     *                   [
     *                      "name" => "Baju",
     *                      "price" => 120000,
     *                     "qty" => 1
     *                ]
     *              ],
     *              "height" => 60,
     *             "price" => 120000,
     *            "weight" => 2,
     *             "width" => 30,
     *              "length" => 30,
     *             "package_type" => 2
     *          ],
     *          "coverage" => "domestic",
     *          "payment_type" => "cash"
     *     ];
     *
     */
    public function createOrder($body)
    {
        Log::info('============================================= shipper createOrder');
        Log::info( json_encode($body));

        $ress = $this->client->request('POST', $this->base_url . '/order', [
            'body' =>  json_encode($body),
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-API-Key' =>  $this->api_key,
            ],
        ]);

        Log::info('============================================= shipper ress createOrder');
        Log::info( $ress->getBody());

        return json_decode($ress->getBody(), true);
    }

    /**
     * Example getPricingDomestic $data get prcing
     * $body = [
     *    'destination' => [
     *        'area_id' => 12623 // from shipper api
     *    ],
     *    'origin' => [
     *        'area_id' => 12212 // from shipper api
     *   ],
     *    'height' => 10, //cm
     *   "width" => 20, //cm
     *    "length" => 10,
     *   "item_value" => 100000, //IDR
     *    "weight" => 2,
     *    "for_order" => true
     * ];
     *
     */
    public function getPricingDomestic($body)
    {
        Log::info('============================================= shipper getPricingDomestic');
        Log::info( json_encode($body));
        $ress = $this->client->request('POST', $this->base_url . '/pricing/domestic', [
            'body' => json_encode($body),
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-API-Key' =>  $this->api_key,
            ],
        ]);

        Log::info('============================================= shipper ress getPricingDomestic');
        Log::info( $ress->getBody());
        return json_decode($ress->getBody(), true);
    }

    public function pickupTimeSlot()
    {
        $ress = $this->client->request('GET', $this->base_url . '/pickup/timeslot?time_zone=Asia/Jakarta', [
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-API-Key' =>  $this->api_key,
            ],
        ]);

        return json_decode($ress->getBody(), true);
    }


    /**
     *  '{
     *"data": {
     *       "order_activation": {
     *           "order_id": [ "215GRRV8Y55VQ" ],
     *           "timezone" : "Asia/Jakarta",
     *           "start_time": "2021-09-09T15:00:00+07:00",
     *           "start_time": "2021-09-09T17:59:00+07:00"
     *       }
     *   }
     *}'
     */
    public function orderPickupWithTimeSlot($shipper_order_id, $start_time, $end_time)
    {

        $body = [
            'data' => [
                "order_activation" => [
                    "order_id" => [$shipper_order_id],
                    "timezone" => "Asia/Jakarta",
                    "start_time" => $start_time,
                    "end_time" => $end_time,
                ],
            ]
        ];

        Log::info('============================================= shipper orderPickupWithTimeSlot');
        Log::info( json_encode($body));
        $ress = $this->client->request('POST', $this->base_url . '/pickup/timeslot', [
            'body' => json_encode($body),
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-API-Key' =>  $this->api_key,
            ],
        ]);

        Log::info('============================================= shipper ress orderPickupWithTimeSlot');
        Log::info( $ress->getBody());
        return json_decode($ress->getBody(), true);
    }

    public function cancelOrderPickupWithTimeSlot($pickup_code)
    {

        $body = [
            'pickup_Code' => $pickup_code
        ];

        Log::info('============================================= shipper cancelOrderPickupWithTimeSlot');
        Log::info( json_encode($body));
        $ress = $this->client->request('PATCH', $this->base_url . '/pickup/cancel', [
            'body' => json_encode($body),
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-API-Key' =>  $this->api_key,
            ],
        ]);

        Log::info('============================================= shipper ress cancelOrderPickupWithTimeSlot');
        Log::info( $ress->getBody());
        return json_decode($ress->getBody(), true);
    }

    public function tracking($order_id)
    {
        $ress = $this->client->request('GET', $this->base_url . '/order/'.$order_id, [
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-API-Key' =>  $this->api_key,
            ],
        ]);

        return json_decode($ress->getBody(), true);
    }
}
