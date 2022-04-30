<?php
namespace App\Doc\V1\Auth;
/**
 * @OA\Parameter(
 *   parameter="ApiForgotPasswordRequest_email",
 *   name="email",
 *   schema={"type": "string"},
 *   in="query",
 *   required=true
 * )
 *     
 * @OA\Post(
 * path="/api/v1/auth/forgot-password", 
 * tags={"Auth"},
 *   @OA\Parameter(ref="#/components/parameters/ApiForgotPasswordRequest_email"),
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

 class ForgotPasswordController{

 }
