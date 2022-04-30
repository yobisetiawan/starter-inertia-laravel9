<?php

namespace App\Doc\V1\Profile;

/**
 
 * 
 * @OA\Get(
 * path="/api/v1/user", 
 * tags={"Profile"},
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class ProfileController
{
}
