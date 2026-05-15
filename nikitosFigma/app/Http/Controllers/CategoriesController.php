<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Category::get();

        $featuredCategories = Category::take(4)->get();

         /*esto se usa para debugear, muestra por consola el resultado de la consulta a la base de datos
         dd($categories);*/

        return Inertia::render('welcome', [
            'categories' => $categories,
            'featuredCategories' => $featuredCategories,
        ]);

    }

}
