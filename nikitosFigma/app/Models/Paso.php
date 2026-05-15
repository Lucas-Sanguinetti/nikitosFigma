<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Paso extends Model
{
    protected $fillable = [
    'recipe_id',
    'descripcion'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }


}
