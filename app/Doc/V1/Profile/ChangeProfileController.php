<?php

namespace App\Doc\V1\Profile;

/**
 * @OA\Parameter(
 *   parameter="ApiChangeProfileRequest_name",
 *   name="name",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Post(
 * path="/api/v1/user/change-profile", 
 * tags={"Profile"},
 * @OA\Parameter(ref="#/components/parameters/ApiChangeProfileRequest_name"),
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class ChangeProfileController
{
}
