<?php

namespace App\Doc\V1\Profile;

/**
 *  @OA\Parameter(
 *   parameter="ApiChangePasswordRequest_old_password",
 *   name="old_password",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * 
 * @OA\Parameter(
 *   parameter="ApiChangePasswordRequest_password",
 *   name="password",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * 
 * @OA\Parameter(
 *   parameter="ApiChangePasswordRequest_password_confirmation",
 *   name="password_confirmation",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * 
 * @OA\Post(
 * path="/api/v1/user/change-password", 
 * tags={"Profile"},
 * @OA\Parameter(ref="#/components/parameters/ApiChangePasswordRequest_old_password"),
 * @OA\Parameter(ref="#/components/parameters/ApiChangePasswordRequest_password"),
 * @OA\Parameter(ref="#/components/parameters/ApiChangePasswordRequest_password_confirmation"),
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class ChangePasswordController
{
}
