<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
    'nombre',
    'tiempo_preparacion',
    'porciones',
    'imagen',
    ];

    public function pasos()
    {
        return $this->hasMany(Paso::class);
    }

    public function ingredientes()
    {
        return $this->hasMany(Ingrediente::class);
    }

}
