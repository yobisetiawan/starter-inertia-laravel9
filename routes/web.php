<?php

use App\Http\Controllers\Web\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Web\Dashboard\HomeController;
use App\Http\Controllers\Web\Data\ExampleController;
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

                    Route::resource('profile', ProfileController::class, [
                        'names' => 'web.profile',
                        'only' => ['index', 'store']
                    ]);

                    Route::resource('change-password', ChangePasswordController::class, [
                        'names' => 'web.profile.password',
                        'only' => ['index', 'store']
                    ]);

                    Route::resource('change-avatar', ChangeAvatarController::class, [
                        'names' => 'web.profile.avatar',
                        'only' => ['index', 'store']
                    ]);
                });

                Route::prefix('data')->group(function () {
                    Route::resource('examples', ExampleController::class, ['names' => 'web.data.example']);
                });
            });
        }
    );
