@extends('layouts.app_no_nav')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <h1 class="mb-5">{{ __('Reset Password') }}</h1>


                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <form method="POST" action="{{ route('password.email') }}">
                    @csrf

                    @component('components.form.input', [
                        'field' => 'email',
                        'label' => 'Email',
                        'placeholder' => 'Email Address',
                        ])
                    @endcomponent

                    <button type="submit" class="btn btn-primary app-btn">
                        <div class="px-5"> {{ __('Send Password Reset Link') }}</div>
                    </button>

                </form>

            </div>
        </div>
    </div>
@endsection
