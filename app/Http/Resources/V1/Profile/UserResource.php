<?php

namespace App\Http\Resources\V1\Profile;

 
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->uuid,
            'name' => $this->name,
            'email' => $this->email,
            'avatar_url' => $this->avatar_url.'?updated_at='.$this->updated_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'addresses' =>   AddressResource::collection($this->whenLoaded('addresses')),
        ];
    }
}
