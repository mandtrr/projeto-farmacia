<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\DashboardController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Rotas de Perfil
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Home
Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

// Farmácia e Avaliação
Route::get('/farmacianumclique', function () {
    return Inertia::render('FarmaciaNumClique');
});
Route::get('/avaliacao', function () {
    return Inertia::render('Avaliacao');
});

// Grupo de Rotas de Administração
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/avaliacoes', function () {
        return Inertia::render('Admin/AvaliacoesPendentes');
    })->name('admin.avaliacoes');
    Route::get('/admin/arquivadas', function () {
        return Inertia::render('Admin/AvaliacoesArquivadas');
    })->name('admin.arquivadas');
});

require __DIR__.'/auth.php';
