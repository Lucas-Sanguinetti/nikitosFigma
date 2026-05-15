<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ingrediente extends Model
{
    protected $fillable = [
    'recipe_id',
    'ingrediente',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }


}
