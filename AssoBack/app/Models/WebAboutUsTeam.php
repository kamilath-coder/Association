<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebAboutUsTeam extends Model
{
    use HasFactory;
    protected $table = 'web_about_us_team';
    protected $primaryKey = 'member_id';
    public $timestamps = false;

    protected $fillable = [
        'member_id',
        'name',
        'role',
        'description',
        'photo',
        'facebook_link',
        'google_link',
        'twitter_link',
        'linkedin_link',
        'email',
        'phone',
    ];


}
