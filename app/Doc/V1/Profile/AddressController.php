<?php

namespace App\Doc\V1\Profile;

/**
 
 * 
 * @OA\Get(
 * path="/api/v1/user/addresses", 
 * tags={"Address"},
 * @OA\Parameter(ref="#/components/parameters/OA_listType"),
 * @OA\Parameter(ref="#/components/parameters/OA_listQ"),
 * @OA\Parameter(ref="#/components/parameters/OA_listPage"),
 * @OA\Parameter(ref="#/components/parameters/OA_SortBy"),
 * @OA\Parameter(ref="#/components/parameters/OA_OrderBy"),
 * @OA\Parameter(ref="#/components/parameters/OA_limit"),
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 * 
 * 
 * @OA\Get(
 * path="/api/v1/user/addresses/{id}", 
 * tags={"Address"},
 * @OA\Parameter(ref="#/components/parameters/OA_id"),
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 * 
 * 
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_title",
 *   name="title",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * 
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_address",
 *   name="address",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * 
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_is_default",
 *   name="is_default",
 *   schema={"type": "integer", "enum": {0,1}, "default": 0},
 *   in="query",
 *   required=true
 * )
 * 
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_country_id",
 *   name="country_id",
 *   schema={"type": "integer"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_province_id",
 *   name="province_id",
 *   schema={"type": "integer"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_city_id",
 *   name="city_id",
 *   schema={"type": "integer"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_suburb_id",
 *   name="suburb_id",
 *   schema={"type": "integer"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_area_id",
 *   name="area_id",
 *   schema={"type": "integer"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_country_name",
 *   name="country_name",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_province_name",
 *   name="province_name",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_city_name",
 *   name="city_name",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_suburb_name",
 *   name="suburb_name",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_area_name",
 *   name="area_name",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_postcode",
 *   name="postcode",
 *   schema={"type": "integer"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiAddressRequest_display_address",
 *   name="display_address",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * 
 * @OA\Post(
 * path="/api/v1/user/addresses", 
 * tags={"Address"},
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_title"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_address"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_is_default"),
 * 
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_country_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_province_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_city_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_suburb_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_area_id"),
 * 
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_country_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_province_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_city_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_suburb_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_area_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_postcode"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_display_address"),
 * 
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 * 
 * @OA\Put(
 * path="/api/v1/user/addresses/{id}", 
 * tags={"Address"},
 * @OA\Parameter(ref="#/components/parameters/OA_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_title"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_address"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_is_default"),
 * 
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_country_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_province_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_city_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_suburb_id"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_area_id"),
 * 
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_country_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_province_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_city_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_suburb_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_area_name"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_postcode"),
 * @OA\Parameter(ref="#/components/parameters/ApiAddressRequest_display_address"),
 * 
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 * 
 * @OA\Delete(
 * path="/api/v1/user/addresses/{id}", 
 * tags={"Address"},
 * @OA\Parameter(ref="#/components/parameters/OA_id"), 
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class AddressController
{
}
