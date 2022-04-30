<?php

namespace App\Doc\V1\Auth;

/**
 * @OA\Parameter(
 *   parameter="ApiResetPasswordRequest_email",
 *   name="email",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiResetPasswordRequest_code",
 *   name="code",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiResetPasswordRequest_password",
 *   name="password",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 * @OA\Parameter(
 *   parameter="ApiResetPasswordRequest_password_confirm",
 *   name="password_confirmation",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 *     
 * @OA\Post(
 * path="/api/v1/auth/reset-password", 
 * tags={"Auth"},
 *   @OA\Parameter(ref="#/components/parameters/ApiResetPasswordRequest_email"),
 *   @OA\Parameter(ref="#/components/parameters/ApiResetPasswordRequest_code"),
 *   @OA\Parameter(ref="#/components/parameters/ApiResetPasswordRequest_password"),
 *   @OA\Parameter(ref="#/components/parameters/ApiResetPasswordRequest_password_confirm"),
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class ResetPasswordController
{
}
