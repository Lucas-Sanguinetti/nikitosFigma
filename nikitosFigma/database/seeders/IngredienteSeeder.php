<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ingrediente;

class IngredienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => '1 bolsa de papas fritas Nikitos clásicas',
        ]);

        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => '1 cucharada de aceite vegetal o de canola',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => '450 g de carne de res molida',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => 'Aderezo para carne (30 g)',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => '2/3 taza de agua',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => '340 g de queso cheddar rallado',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => 'Chiles jalapeños conservados',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => 'Cebollas conservadas',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => 'Salsa criolla',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => 'Guacamole',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => 'Crema',
        ]);
        
        Ingrediente::create([
            'recipe_id' => 1,
            'ingrediente' => '',
        ]);

    }
}
