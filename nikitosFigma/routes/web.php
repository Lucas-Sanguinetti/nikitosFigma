<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');



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



require __DIR__.'/settings.php';
