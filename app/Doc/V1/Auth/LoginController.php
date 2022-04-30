<?php

namespace App\Doc\V1\Auth;

/**
 * @OA\Parameter(
 *   parameter="ApiLoginRequest_email",
 *   name="email",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiLoginRequest_password",
 *   name="password",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 *     
 * @OA\Post(
 * path="/api/v1/auth/login", 
 * tags={"Auth"},
 *   @OA\Parameter(ref="#/components/parameters/ApiLoginRequest_email"),
 *   @OA\Parameter(ref="#/components/parameters/ApiLoginRequest_password"),
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 * 
 * @OA\Get(
 * path="/api/v1/auth/logout", 
 * tags={"Auth"},
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class LoginController
{
}
