<?php
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::view('/{path?}', 'app')->where('path', '.*');

Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('register');
