<?php

use App\Http\Controllers\Web\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Web\Dashboard\HomeController;
use App\Http\Controllers\Web\Profile\ChangeAvatarController;
use App\Http\Controllers\Web\Profile\ChangePasswordController;
use App\Http\Controllers\Web\Profile\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('App\Http\Controllers\Web')
    ->group(
        function () {

            Auth::routes();

            Route::get('logout', [LoginController::class, 'logout']);

            Route::middleware(['auth'])->group(function () {
                Route::get('/', [HomeController::class, 'index']);
                Route::get('dashboard', [HomeController::class, 'index'])->name('web.dashboard');

                Route::prefix('user')->group(function () {
                    Route::get('profile', [ProfileController::class, 'index'])->name('web.profile.show');
                    Route::post('profile', [ProfileController::class, 'store'])->name('web.profile.save');

                    Route::get('change-password', [ChangePasswordController::class, 'index'])->name('web.profile.change.password');
                    Route::post('change-password', [ChangePasswordController::class, 'store'])->name('web.profile.change.password.save');

                    Route::get('change-avatar', [ChangeAvatarController::class, 'index'])->name('web.profile.change.avatar');
                    Route::post('change-avatar', [ChangeAvatarController::class, 'store'])->name('web.profile.change.avatar.save');
                });
            });
        }
    );
