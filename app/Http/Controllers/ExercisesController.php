<?php

namespace App\Http\Controllers;

use App\Models\Exercises;
use Illuminate\Http\Request;

class ExercisesController extends Controller
{
    public function index()
    {
        return Exercises::all();
    }

    public function show(Exercises $exercise)
    {
        return $exercise;
    }

}
