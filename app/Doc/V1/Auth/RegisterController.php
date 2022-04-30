<?php

namespace App\Doc\V1\Auth;

/**
 * @OA\Parameter(
 *   parameter="ApiRegisterRequest_name",
 *   name="name",
 *   in="query",
 *   schema={"type": "string"},
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiRegisterRequest_email",
 *   name="email",
 *   in="query",
 *   schema={"type": "string"},
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiRegisterRequest_password",
 *   name="password",
 *   in="query",
 *   schema={"type": "string"},
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiRegisterRequest_password_confirm",
 *   name="password_confirmation",
 *   in="query",
 *   schema={"type": "string"},
 *   required=true
 * )
 *     
 * @OA\Post(
 * path="/api/v1/auth/register", 
 * tags={"Auth"},
 *   @OA\Parameter(ref="#/components/parameters/ApiRegisterRequest_name"),
 *   @OA\Parameter(ref="#/components/parameters/ApiRegisterRequest_email"),
 *   @OA\Parameter(ref="#/components/parameters/ApiRegisterRequest_password"),
 *   @OA\Parameter(ref="#/components/parameters/ApiRegisterRequest_password_confirm"),
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 * 
 */

class RegisterController
{
}
