<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'category_id' => 1,
            'nombre' => 'Palitos salados',
            'codigo' => '336',
            'tamano' => '8px20ux20grs',
            'vida_util' => '8 meses',
        ]);

        Product::create([
            'category_id' => 1,
            'nombre' => 'Maikitos de Queso',
            'codigo' => '4',
            'tamano' => '12px20ux12grs',
            'vida_util' => '8 meses',
        ]);
        
        Product::create([
            'category_id' => 1,
            'nombre' => 'Pizzitos J y Q',
            'codigo' => '242',
            'tamano' => '12px20ux12grs',
            'vida_util' => '8 meses',
        ]);

        Product::create([
            'category_id' => 1,
            'nombre' => 'Bolitas Dulces',
            'codigo' => '1',
            'tamano' => '12px20ux12grs',
            'vida_util' => '12 meses',
        ]);

        Product::create([
            'category_id' => 1,
            'nombre' => 'Pochoclos Acaram.',
            'codigo' => '1104',
            'tamano' => '10px20ux20grs',
            'vida_util' => '12 meses',
        ]);

        Product::create([
            'category_id' => 1,
            'nombre' => 'Papas F.c/ Pay-Bastón',
            'codigo' => '294',
            'tamano' => '8px20ux15grs',
            'vida_util' => '8 meses',
        ]);

        Product::create([
            'category_id' => 1,
            'nombre' => 'Cereal de Maíz',
            'codigo' => '7',
            'tamano' => '10px30ux12grs',
            'vida_util' => '12 meses',
        ]);


        Product::create([
            'category_id' => 1,
            'nombre' => 'Cereal de Arroz',
            'codigo' => '110',
            'tamano' => '12px20ux20grs',
            'vida_util' => '12 meses',
        ]);


        Product::create([
            'category_id' => 1,
            'nombre' => 'Girasol',
            'codigo' => '292',
            'tamano' => '12px20ux15grs',
            'vida_util' => '8 meses',
        ]);


        Product::create([
            'category_id' => 2,
            'nombre' => 'Papas F.c/ Clásico',
            'codigo' => '315',
            'tamano' => '15tx5ux20grs',
            'vida_util' => '8 meses',
        ]);

        Product::create([
            'category_id' => 2,
            'nombre' => 'Papas F.c/ Americano',
            'codigo' => '316',
            'tamano' => '15tx5ux20grs',
            'vida_util' => '8 meses',
        ]);

        Product::create([
            'category_id' => 2,
            'nombre' => 'Papas F.c/ Pay-Bastón',
            'codigo' => '293',
            'tamano' => '20tx5ux20grs',
            'vida_util' => '8 meses',
        ]);
        

        


    }
}
