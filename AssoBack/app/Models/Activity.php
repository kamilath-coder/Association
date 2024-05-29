<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;
    protected $table = 'items';
    protected $primaryKey = 'Items_Numbers';
    public $timestamps = false;
    protected $fillable = [
        'Items_Numbers',
	    'Categories',
		'Names',
		'fr_Name',
	    'Types',
	    'Prices',
	    'nb_place',
	    'Available',
	    'Status',
        'Overview',
        'fr_overview',
        'Descriptions',
        'fr_description',
        'Pictures',
        'subscription_frequency',
        'fr_subscription_frequency',
        'related_link',
        'item_doc',
        'initiale_prices',
        'contract',
    ];

    public function category()
    {
        return $this->belongsTo(ItemCategory::class, 'Categories','Category_id');
    }

    public function images()
    {
        return $this->hasMany(ActivityImage::class, 'Id_item', 'Items_Numbers');
    }


}
