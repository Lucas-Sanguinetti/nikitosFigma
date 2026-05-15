<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoriesController;
use App\Models\Product;
use App\Models\Category;
use App\Models\Recipe;




Route::inertia('/productos', 'productsPage', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('productos');

Route::inertia('/donde-comprar', 'whereToBuyPage', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('donde-comprar');

Route::inertia('/recetas', 'recipesPage', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('recetas');

Route::inertia('/nosotros', 'aboutUsPage', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('nosotros');

Route::inertia('/contacto', 'contactPage', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('contacto');

Route::get('/productos/producto/{id}', function ($id) {
    return Inertia::render('productPage', [
        'id' => $id,
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->whereNumber('id')->name('producto');

Route::get('/registro', function () {
    return Inertia::render('register', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('registro');

Route::get('/recetas/receta/{id}', function ($id) {
    return Inertia::render('recipePage', [
        'id' => $id,
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->whereNumber('id')->name('receta');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::get('/', function () {

    $products = Product::with('images')->get();
    $categories = Category::all();
    $recipes = Recipe::all();

    return Inertia::render('welcome', [
        'categories' => $categories,
        'featuredCategories' => $categories,
        'products' => $products,
        'recipes' => $recipes,
    ]);
});

Route::get('/productos', function () {

    $categories = Category::all();

    return Inertia::render('productsPage', [
        'categories' => $categories,

    ]);
});

Route::get('/productos/producto/{id}', function ($id) {

    $categories = Category::all();
    $products = Product::with('images')->get();
    
    return Inertia::render('productPage', [
        'id' => $id,
        'canRegister' => Features::enabled(Features::registration()),
        'categories' => $categories,
        'products' => $products,
    ]);
})->whereNumber('id')->name('producto');


Route::get('/recetas', function () {

    $recipes = Recipe::all();

    return Inertia::render('recipesPage', [
        'recipes' => $recipes,
        'canRegister' => Features::enabled(Features::registration()),
    ]);
});


require __DIR__.'/settings.php';
