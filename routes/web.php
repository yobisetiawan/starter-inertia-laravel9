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

function webResource($name, $cls, $names = null, $only = null)
{
    $route = Route::resource($name, $cls);

    $route->parameters([$name => 'id']);

    if ($names) {
        $route->names('web.' . $names);
    }

    if ($only) {
        $route->only($only);
    }

    return $route;
}

Route::namespace('App\Http\Controllers\Web')
    ->group(
        function () {

            Auth::routes();

            Route::get('logout', [LoginController::class, 'logout']);

            Route::middleware(['auth'])->group(function () {
                Route::get('/', [HomeController::class, 'index']);
                Route::get('dashboard', [HomeController::class, 'index'])->name('web.dashboard');

                Route::prefix('user')->group(function () {
                    webResource('profile', ProfileController::class, 'profile', ['index', 'store']);
                    webResource('change-password', ChangePasswordController::class, 'profile.password', ['index', 'store']);
                    webResource('change-avatar', ChangeAvatarController::class, 'profile.avatar', ['index', 'store']);
                });

                Route::prefix('data')->group(function () {
                    webResource('examples', ExampleController::class, 'data.example');
                });
            });
        }
    );
