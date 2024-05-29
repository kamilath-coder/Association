<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityImage extends Model
{
    use HasFactory;
    protected $table = 'items_images';
    protected $primaryKey = 'ID';
    public $timestamps = false;

    protected $fillable = [
        'Id_item',
        'Image',
    ];

    public function item()
    {
        return $this->belongsTo(Activity::class, 'Id_item', 'Items_Numbers');
    }

}
