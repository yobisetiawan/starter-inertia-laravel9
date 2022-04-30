<?php

namespace App\Doc\V1\Auth;

/**
 * @OA\Parameter(
 *   parameter="ApiVerifyPasswordRequest_email",
 *   name="email",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiVerifyPasswordRequest_code",
 *   name="code",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 *     
 * @OA\Post(
 * path="/api/v1/auth/verify-password", 
 * tags={"Auth"},
 *   @OA\Parameter(ref="#/components/parameters/ApiVerifyPasswordRequest_email"),
 *   @OA\Parameter(ref="#/components/parameters/ApiVerifyPasswordRequest_code"),
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class VerifyPasswordController
{
}
