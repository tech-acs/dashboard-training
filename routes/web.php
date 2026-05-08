<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

Route::get('start', function () {
    return view('menu', [
        'app_port' => env('APP_PORT', 80),
        'mailpit_port' => env('FORWARD_MAILPIT_DASHBOARD_PORT', 8025),
        'adminer_port' => env('FORWARD_ADMINER_PORT', 89),
    ]);
})->name('start')->middleware('web');

Route::get('course-outline', function () {
    return view('course-outline', [
        'markdown' => File::get(base_path('training/Course.md'))
    ]);
})->name('course-outline')->middleware('web');
