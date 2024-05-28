<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemCategory extends Model
{
    use HasFactory;

    protected $table = 'item_category';

    protected $primaryKey = 'Category_id';

    public $timestamps = false;

    protected $fillable=[
        'Category_id',
        'group_category',
        'Names',
        'fr_Name',
        'Descriptions',
        'fr_description',
        'Pictures'
    ];


    //un item category peut avoir plusieurs items

    public function items()
    {
        return $this->hasMany(Activity::class, 'Categories','Category_id');
    }




}
