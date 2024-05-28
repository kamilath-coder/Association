<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partenaire extends Model
{
    use HasFactory;
    protected $table = 'web_partners';
    protected $primaryKey = 'id_partner';
    public $timestamps = false;

    protected $fillable =[
        'id_partner',
        'logo',
        'website_link'
    ];



}
