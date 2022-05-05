<?php

namespace App\Http\Requests\Web\Data;

use Illuminate\Foundation\Http\FormRequest;


class ExampleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:50',
            'description' => 'required|max:1000',
            'number' => 'required|min:1',
            'password' => 'required|min:6',
            'is_default' => 'required|boolean|in:1',
            'gender' => 'required|in:F,M',
            'multi_check' => 'required|array',
            'date' => 'required',
            'time' => 'nullable',
            'datetime' => 'nullable',
            'select' => 'required',
            'multi_select' => 'required|array',
            'file' => 'required|mimes:jpeg,jpg,png|max:5000',
           // 'multi_file' => 'required|array',
           // 'multi_file.*' => 'mimes:jpeg,jpg,png|max:5000',
        ];
    }
}
