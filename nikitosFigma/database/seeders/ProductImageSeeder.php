<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductImage;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductImage::create([
            'product_id' => 1,
            'ruta' => 'images/products/palitosSalados336.png',
        ]);

        ProductImage::create([
            'product_id' => 2,
            'ruta' => 'images/products/maikitosDeQueso4.png',
        ]);

        ProductImage::create([
            'product_id' => 3,
            'ruta' => 'images/products/palitosJYQ242.png',
        ]);

        ProductImage::create([
            'product_id' => 4,
            'ruta' => 'images/products/BolitasDulces1.png',
        ]);
        
        ProductImage::create([
            'product_id' => 5,
            'ruta' => 'images/products/pochoclosAcaramelados1104.png',
        ]);
        
        ProductImage::create([
            'product_id' => 6,
            'ruta' => 'images/products/PapasF.cPay-Bastón294.png',
        ]);
        
        ProductImage::create([
            'product_id' => 7,
            'ruta' => 'images/products/cerealDeMaiz7.png',
        ]);
        
        ProductImage::create([
            'product_id' => 8,
            'ruta' => 'images/products/Cereal de Arroz110.png',
        ]);
        
        ProductImage::create([
            'product_id' => 9,
            'ruta' => 'images/products/Girasol292.png',
        ]);
        
        ProductImage::create([
            'product_id' => 10,
            'ruta' => 'images/products/Papas F.cClásico315.png',
        ]);
        
        ProductImage::create([
            'product_id' => 11,
            'ruta' => 'images/products/Papas F.c Americano316.png',
        ]);
        
        ProductImage::create([
            'product_id' => 12,
            'ruta' => 'images/products/Papas F.cPay-Bastón293.png',
        ]);


    }
}
