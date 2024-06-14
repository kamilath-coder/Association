<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerAz extends Model
{
    use HasFactory;
    protected $connection = 'mysql2';
    protected $table = 'customers';
    protected $primaryKey = 'Customers_Numbers';
    public $timestamps = false;

    protected $fillable = [
        'Customers_Numbers',
        'az_id',
        'added_from',
        'created_date',
        'type',
        'size',
        'Names',
        'LastName',
        'birth_date',
        'sexe',
        'matrimonial',
        'nb_child',
        'Picture',
        'Status',
        'Phones',
        'E-mails',
        'Website',
        'Country',
        'Province',
        'City',
        'Adresses',
        'Appt',
        'Postal_Code',
        'Categories',
        'id_doc',
        'Description',
        'Notes',
        'customer_db',
        'User',
        'updated_date',
    ];
}
