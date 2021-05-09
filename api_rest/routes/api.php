<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MovieController;

Route::get('/movies/details/{idMovie}',[MovieController::class, 'getDetailsMovie']);
Route::get('/movies/genre',[MovieController::class, 'getGenre']);
Route::get('/movies',[MovieController::class, 'getMoviePopularAlls']);
Route::get('/movies/{valueFilter}',[MovieController::class, 'getMovieSearch']);
