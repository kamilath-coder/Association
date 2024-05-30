<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebPage extends Model
{
    use HasFactory;
    protected $table = 'web_pages';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'id',
        'name',
        'fr_name',

    ];

    public function banner(){
        return $this->hasOne(WebBanner::class, 'page_id');
    }

}
