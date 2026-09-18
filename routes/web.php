<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('about', function () {
        return Inertia::render('about');
    })->name('about');

    Route::get('academe', function () {
        return Inertia::render('academe');
    })->name('academe');

    Route::get('admission', function () {
        return Inertia::render('admission');
    })->name('admission');

    Route::get('researchextension', function () {
        return Inertia::render('researchextension');
    })->name('researchextension');

    Route::get('studentalumni', function () {
        return Inertia::render('studentalumni');
    })->name('studentalumni');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';