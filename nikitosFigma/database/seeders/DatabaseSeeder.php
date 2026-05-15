<?php

namespace Database\Seeders;
use Database\Seeders\CategorySeeder;
use Database\Seeders\ProductSeeder;
use Database\Seeders\ProductImageSeeder;
use Database\Seeders\UserSeeder;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
            ProductImageSeeder::class,
            RecipeSeeder::class,
            PasoSeeder::class,
            IngredienteSeeder::class,
            UserSeeder::class,
        ]);
    }
}
