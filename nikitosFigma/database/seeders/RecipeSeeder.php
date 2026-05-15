<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recipe::create([
            'nombre' => 'Nachos de tacos en sartén',
            'tiempo_preparacion' => '5 minutos',
            'porciones' => '8 porciones',
            'imagen' => 'images/recipes/Nachos de tacos en sartén.png',
        ]);

        Recipe::create([
            'nombre' => 'Tiras de pescado',
            'tiempo_preparacion' => '25 minutos',
            'porciones' => '10 porciones',
            'imagen' => 'images/recipes/Tiras de pescado.png',
        ]);

        Recipe::create([
            'nombre' => 'Tortilla con papas de paquete',
            'tiempo_preparacion' => '5 minutos',
            'porciones' => '8 porciones',
            'imagen' => 'images/recipes/Tortilla con papas de paquete.png',
        ]);

        Recipe::create([
            'nombre' => 'Diferentes Salsas para Nachos Clásicos Nikitos',
            'tiempo_preparacion' => '5 minutos',
            'porciones' => '8 porciones',
            'imagen' => 'images/recipes/Diferentes Salsas para Nachos Clásicos Nikitos.png',
        ]);

        Recipe::create([
            'nombre' => 'Salteado crocante de brócoli y tofu',
            'tiempo_preparacion' => '5 minutos',
            'porciones' => '8 porciones',
            'imagen' => 'images/recipes/Diferentes Salsas para Nachos Clásicos Nikitos.png',
        ]);
        
        Recipe::create([
            'nombre' => 'Papas fritas onduladas cubiertas de chocolate',
            'tiempo_preparacion' => '5 minutos',
            'porciones' => '8 porciones',
            'imagen' => 'images/recipes/Diferentes Salsas para Nachos Clásicos Nikitos.png',
        ]);
        
    }

}

