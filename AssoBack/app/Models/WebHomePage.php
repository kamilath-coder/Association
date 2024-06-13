<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebHomePage extends Model
{
    use HasFactory;

    protected $table = 'website_homepage_equipment';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'image',
        'title',
        'fr_title',
        'text',
        'fr_text',
    ];

}
