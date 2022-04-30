<?php

namespace App\Doc\V1\Profile;

/**
 
 * 
 * @OA\Post(
 * path="/api/v1/user/change-avatar", 
 * tags={"Profile"},
 * @OA\Parameter(ref="#/components/parameters/OA_Relations"),
 * @OA\RequestBody(
 *      required=true,
 *      @OA\MediaType(
 *          mediaType="multipart/form-data",
 *          @OA\Schema(
 *              @OA\Property( 
 *                  property="avatar",
 *                  type="string",
 *                  format="binary"
 *              ), 
 *          )
 *      )
 * ),
 * security={{"bearerAuth":{}}},
 * @OA\Response(response=200, description="", @OA\JsonContent()),
 * )
 */

class ChangeAvatarController
{
}
