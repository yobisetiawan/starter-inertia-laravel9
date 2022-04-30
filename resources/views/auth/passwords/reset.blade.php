@extends('layouts.app_no_nav')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <h1 class="mb-5">{{ __('Reset Password') }}</h1>


                <form method="POST" action="{{ route('password.update') }}">
                    @csrf

                    <input type="hidden" name="token" value="{{ $token }}">

                    @component('components.form.input', [
                        'field' => 'email',
                        'label' => 'Email',
                        ])
                    @endcomponent

                    @component('components.form.input', [
                        'field' => 'password',
                        'type' => 'password',
                        'label' => 'Password',
                        ])
                    @endcomponent


                    @component('components.form.input', [
                        'field' => 'password_confirmation',
                        'type' => 'password',
                        'label' => 'Confirm Password',
                        ])
                    @endcomponent

                    <button type="submit" class="btn btn-primary app-btn">
                        {{ __('Reset Password') }}
                    </button>
                </form>

            </div>
        </div>
    </div>
@endsection
