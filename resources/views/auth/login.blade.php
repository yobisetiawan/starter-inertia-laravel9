@extends('layouts.app_no_nav')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <h1 class="mb-5"> {{ __('Login') }}</h1>


                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    @component('components.form.input', [
                        'field' => 'email',
                        'label' => 'Email',
                        ])
                    @endcomponent

                    @component('components.form.input', [
                        'field' => 'password',
                        'label' => 'Password',
                        'type' => 'password',
                        ])
                    @endcomponent


                    <div class="app-form-check form-check mb-5 d-flex align-items-center">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember"
                            {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label ms-2 color-success font-bold" for="remember">
                            {{ __('Stay signed in') }}
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary app-btn">
                        <div class="px-5"> {{ __('Login') }}</div>
                    </button>

                    @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    @endif
                </form>

            </div>
        </div>
    </div>
@endsection
