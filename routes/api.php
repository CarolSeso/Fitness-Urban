<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\WorkoutController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/proposed-workouts', [WorkoutController::class, 'proposedWorkouts']);
    Route::get('/personal-workouts', [WorkoutController::class, 'personalWorkouts']);
    Route::post('/personal-workouts', [WorkoutController::class, 'store']);
    Route::delete('/personal-workouts/{workout}', [WorkoutController::class, 'destroy']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/posts', [PostController::class, 'index']);


