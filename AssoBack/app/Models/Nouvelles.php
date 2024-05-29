<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nouvelles extends Model
{
    use HasFactory;
    protected $table = 'articles';
    protected $primaryKey = 'id_article';
    public $timestamps = false;

    protected $fillable = [
        'id_article',
        'creation_date',
        'created_by',
        'en_article_tittle',
        'article_tittle',
        'article_type',
        'related_item',
        'related_link',
        'en_article',
        'article',
        'reference_doc',
        'last_update_date',
        'last_update_user',
        'privacy',
        'picture',
    ];

    public function images()
    {
        return $this->hasMany(ActivityImage::class, 'Id_item', 'related_item');
    }

}
