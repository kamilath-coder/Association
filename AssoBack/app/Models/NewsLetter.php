<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsLetter extends Model
{
    use HasFactory;

    protected $table = 'web_news_letter';
    
    protected $primaryKey = 'email_id';

    public $timestamps = false;

    protected $fillable = [
        'email',
        'subject',
        'name',
        'phone',
        'note',
        'date',
    ];

}
