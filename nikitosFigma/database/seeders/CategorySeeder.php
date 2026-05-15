<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'nombre' => 'Línea tradicional escolar',
            'imagen' => 'images/categories/lineaTradicionalEscolar.png',
            'color' => '#f05199'
        ]);

        Category::create([
            'nombre' => 'Línea juvenil metalizada 1',
            'imagen' => 'images/categories/lineaJuvenilMetalizada1.png',
            'color' => '#fd7e80'
        ]);

        Category::create([
            'nombre' => 'Línea juvenil metalizada 2',
            'imagen' => 'images/categories/lineaJuvenilMetalizada2.png',
            'color' => '#d8696b'
        ]);

        Category::create([
            'nombre' => 'Línea fraccionada cristal x 40grs',
            'imagen' => 'images/categories/lineaFraccionadaCristal.png',
            'color' => '#b899fc'
        ]);

        Category::create([
            'nombre' => 'Línea max',
            'imagen' => 'images/categories/lineaMax.png',
            'color' => '#dc6dfc'
        ]);

        Category::create([
            'nombre' => 'Línea max x 65grs',
            'imagen' => 'images/categories/lineaMax65g.png',
            'color' => '#ebae59'
        ]);

        Category::create([
            'nombre' => 'Línea fraccionada cristal x 80grs',
            'imagen' => 'images/categories/lineaFraccionadaCristal80.png',
            'color' => '#b899fc'
        ]);

        Category::create([
            'nombre' => 'Línea premium max x 100grs',
            'imagen' => 'images/categories/lineaPremiumMax100g.png',
            'color' => '#fdbc62'
        ]);

        Category::create([
            'nombre' => 'Línea premium max x 120grs',
            'imagen' => 'images/categories/lineaPremiumMax120g.png',
            'color' => '#1ccb86'
        ]);

        Category::create([
            'nombre' => 'Línea familiar tradicional',
            'imagen' => 'images/categories/lineaFamiliarTradicional.png',
            'color' => '#ffacdd'
        ]);

        Category::create([
            'nombre' => 'Línea familiar cristal',
            'imagen' => 'images/categories/lineaFamiliarCristal.png',
            'color' => '#87ccbb'
        ]);

        Category::create([
            'nombre' => 'Línea combo',
            'imagen' => 'images/categories/lineaCombo.png',
            'color' => '#19a0ad'
        ]);

        Category::create([
            'nombre' => 'Jugos',
            'imagen' => 'images/categories/jugos.png',
            'color' => '#fd494d'
        ]);

        Category::create([
            'nombre' => 'Línea granel suelta x 1kg',
            'imagen' => 'images/categories/lineaGranelSuelta1kg.png',
            'color' => '#b9f9ec'
        ]);

        Category::create([
            'nombre' => 'Línea granel suelta x 3kg',
            'imagen' => 'images/categories/lineaGranelSuelta3kg.png',
            'color' => '#b4e4f8'
        ]);
    }
}
