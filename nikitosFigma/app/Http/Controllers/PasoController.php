<?php

namespace App\Http\Controllers;

use App\Models\Paso;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PasoController extends Controller
{
    public function index()
    {
        $pasos = Paso::get();

        return Inertia::render('welcome', [
            'pasos' => $pasos,
        ]);

    }

}
