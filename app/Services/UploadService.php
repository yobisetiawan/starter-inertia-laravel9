<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as XImage;

class UploadService
{

    public $disk = 'public';

    public $file;

    public $path;

    public $filename;

    public $option = 'public';

    public $fileInfo;

    public function __construct($file, $path, $filename = null, $disk = null, $option = null)
    {
        $this->file = $file;

        $this->path = $path;

        $this->filename = ($filename ?? time()) . '.' . $this->file->getClientOriginalExtension();

        $this->disk = $disk ?? env('DEFAULT_DISK', $this->disk);

        $this->option = $option ?? $this->option;

        $this->fileInfo = $this->setFileOriginalInfo();
    }

    public function uploadResize($size = 100)
    {

        $img = XImage::make($this->file->getRealPath());

        $img->resize($size, $size, function ($constraint) {
            $constraint->aspectRatio();
        });

        $img->stream();

        Storage::disk($this->disk)->put($this->path . '/' . $this->filename, $img, $this->option);
    }

    public function upload()
    {
        Storage::disk($this->disk)->put($this->path . '/' . $this->filename, file_get_contents($this->file), $this->option);
    }

    public function getURL()
    {
        return Storage::disk($this->disk)->url($this->path . '/' . $this->filename);
    }

    public function getSize()
    {
        return Storage::disk($this->disk)->size($this->path . '/' . $this->filename);
    }

    public function setFileOriginalInfo()
    {
        return [
            'original_name' => $this->file->getClientOriginalName(),
            'original_extension' => $this->file->getClientOriginalExtension(),
            'original_size' => $this->file->getSize(),
            'original_mimetype' => $this->file->getMimeType(),
        ];
    }

   

    public function getUploaded()
    {
        return [
            'url' => $this->getURL(),
            'disk' => $this->disk,
            'path' => $this->path . '/' . $this->filename,
            'mime_type' => $this->fileInfo['original_mimetype'],
            'name' =>  $this->filename,
            'size' => $this->getSize()
        ];
    }

    public function saveFileInfo($obj, $extra_data = []){
        $file_info = $this->getUploaded(); 
        
        $obj->updateOrCreate([], array_merge($file_info, $extra_data));
    }
}
