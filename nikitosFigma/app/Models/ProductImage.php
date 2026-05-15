<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/*se decidio dividir la tabla de productos en dos tablas: productos y imagenes de productos porque algunos productos tienen multiples imagenes */

class ProductImage extends Model
{
    protected $fillable = [
    'product_id',
    'ruta'
    ];

     public function product()
    {
        return $this->belongsTo(Product::class);
    }
}