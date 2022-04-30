<?php

namespace App\Doc;

/**
 * @OA\Info(
 *    title="Project Name Api",
 *    version="1.0.0"
 * )
 *
 * @OA\SecurityScheme(
 *     type="http",
 *     description="Login with email and password to get the authentication token",
 *     name="Token Based",
 *     in="header",
 *     scheme="bearer",
 *     bearerFormat="JWT",
 *     securityScheme="bearerAuth",
 * )
 *
 * @OA\Parameter(
 *  in="path",
 *  parameter="OA_id",
 *  name="id",
 *  required=true,
 *      @OA\Schema(
 *          type="string"
 *      )
 *  )
 *
 * @OA\Parameter(
 *  in="query",
 *  parameter="OA_listQ",
 *  name="q",
 *      @OA\Schema(
 *          type="string"
 *      )
 *  )
 *
 * @OA\Parameter(
 *  in="query",
 *  parameter="OA_listType",
 *  name="type",
 *  schema={"type": "string", "enum": {"collection", "pagination"}, "default": "collection"}
 *  )
 *
 *  @OA\Parameter(
 *  in="query",
 *  parameter="OA_listPage",
 *  name="page",
 *      @OA\Schema(
 *          type="string"
 *      )
 *  )
 *
 * @OA\Parameter(
 *  in="query",
 *  parameter="OA_SortBy",
 *  name="sort_by",
 *  schema={"type": "string", "enum": {"asc", "desc"}, "default": "asc"}
 * )
 *
 *
 * @OA\Parameter(
 *  in="query",
 *  parameter="OA_OrderBy",
 *  name="order_by",
 *      @OA\Schema(
 *          type="string"
 *      )
 *  )
 *
 * @OA\Parameter(
 *  in="query",
 *  parameter="OA_limit",
 *  name="limit",
 *      @OA\Schema(
 *          type="integer"
 *      )
 *  )
 *     
 *  @OA\Parameter(
 *  in="query",
 *  parameter="OA_Relations",
 *  name="relations",
 *  schema={"type": "string"}
 * )
 *
 */

class Controller
{
}
