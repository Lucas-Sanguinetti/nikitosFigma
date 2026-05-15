<?php

namespace App\Http\Controllers;

use App\Models\Ingrediente;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IngredienteController extends Controller
{
    public function index()
    {
        $ingredientes = Ingrediente::get();

        return Inertia::render('welcome', [
            'ingredientes' => $ingredientes,
        ]);

    }

}
