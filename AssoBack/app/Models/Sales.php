<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;

    protected $table = 'sales';
    protected $primaryKey = 'Sales_Numbers';
    public $timestamps = false;

    protected $fillable = [
        'Sales_Numbers',
        'Containers_Names',
        'Items_Numbers',
        'group_sales',
        'Quantities',
        'Unique Prices',
        'discount_id',
        'Amount_Paid',
        'Discount',
        'cashier',
        'served_by',
        'expected_service_date',
        'Delivered_date',
        'delivered',
        'Taxe1',
        'Taxe2',
        'Taxe3',
        'Dates',
        'Customers_Numbers',
        'sales_type',
        'linked_project',
        'Descriptions',
        'Bills',
        'Bills_Names',
        'User',
        'repatriated',
        'seat_id',
    ];


   
}
