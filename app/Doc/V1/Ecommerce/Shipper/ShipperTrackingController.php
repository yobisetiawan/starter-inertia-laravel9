<?php

namespace App\Doc\V1\Ecommerce\Shipper;

/**
 
 * 
 * 
 * 
 * @OA\Parameter(
 *  in="path",
 *  parameter="OA_shipper_tracking_id",
 *  name="shipper_tracking_id",
 *  required=true,
 *      @OA\Schema(
 *          type="string"
 *      )
 *  )
 * @OA\Get(
 * path="/api/v1/shipper/tracking/{shipper_tracking_id}", 
 * tags={"Shipper"},
 * security={{"bearerAuth":{}}},
  * @OA\Parameter(ref="#/components/parameters/OA_shipper_tracking_id"),
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class ShipperTrackingController
{
}
