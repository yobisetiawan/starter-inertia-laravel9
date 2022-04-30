@extends('layouts.app_no_nav')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <h1 class="mb-5"> {{ __('Confirm Password') }}</h1>


                {{ __('Please confirm your password before continuing.') }}

                <form method="POST" action="{{ route('password.confirm') }}">
                    @csrf

                    @component('components.form.input', [
                        'field' => 'password',
                        'type' => 'password',
                        'label' => 'Password',
                        ])
                    @endcomponent

                    <button type="submit" class="btn btn-primary app-btn">
                        <div class="px-5"> {{ __('Confirm Password') }}</div>
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
