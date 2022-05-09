<?php

use App\Helpers\MyRoute;
use App\Http\Controllers\Web\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Web\Dashboard\HomeController;
use App\Http\Controllers\Web\Data\ExampleController;
use App\Http\Controllers\Web\Json\ExampleController as JsonExampleController;
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
                    MyRoute::resourceWEB('profile', ProfileController::class, 'profile', ['index', 'store']);
                    MyRoute::resourceWEB('change-password', ChangePasswordController::class, 'profile.password', ['index', 'store']);
                    MyRoute::resourceWEB('change-avatar', ChangeAvatarController::class, 'profile.avatar', ['index', 'store']);
                });

                Route::prefix('data')->group(function () {
                    MyRoute::resourceWEB('examples', ExampleController::class, 'data.example');
                });

                Route::prefix('json')->group(function () {
                    MyRoute::resourceWEB('examples', JsonExampleController::class, 'json.example', ['index']);
                });
            });
        }
    );
