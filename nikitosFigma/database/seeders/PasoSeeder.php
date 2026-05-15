<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Paso;

class PasoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Paso::create([
            'recipe_id' => 1,
            'paso' => 'Precalienta el horno a 190 °C.',
        ]);

        Paso::create([
            'recipe_id' => 1,
            'paso' => 'Calienta el aceite en una sartén mediana a fuego medio-alto. Dora la carne molida hasta que esté completamente cocida. Agrega el aderezo para res y el agua y cocina hasta que el agua se evapore y se espese hasta formar una salsa.',
        ]);

        Paso::create([
            'recipe_id' => 1,
            'paso' => 'En una sartén grande de hierro fundido (u otra fuente para hornear) coloca las papas fritas, carne de ternera para tacos, la mitad del queso cheddar, las cebollas conservadas, los jalapeños conservados y la otra mitad de queso cheddar.',
        ]);

        Paso::create([
            'recipe_id' => 1,
            'paso' => 'Hornea durante 5 a 7 minutos, hasta que el queso burbujee y se derrita por completo.',
        ]);

        Paso::create([
            'recipe_id' => 1,
            'paso' => 'Sirve con crema, salsa criolla y guacamole.',
        ]);
    }
}
