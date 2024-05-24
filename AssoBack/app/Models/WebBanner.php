<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebBanner extends Model
{
    use HasFactory;
    protected $table = 'web_banners';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'id',
        'picture',
        'text1',
        'text2',
        'text3',
        'fr_text1',
        'fr_text2',
        'fr_text3',
        'page_id',
    ];
    
    public function page(){
        return $this->belongsTo(WebPage::class, 'page_id');
    }
    
}
