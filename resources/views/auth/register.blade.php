@extends('layouts.app_no_nav')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <h1 class="mb-5">{{ __('Register') }}</h1>


                <form method="POST" action="{{ route('register') }}">
                    @csrf

                    @component('components.form.input', [
                        'field' => 'name',
                        'label' => 'Name',
                        ])
                    @endcomponent

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

                    @component('components.form.button')
                        <div class="px-5">{{ __('Register') }}</div>
                    @endcomponent
                </form>

            </div>
        </div>
    </div>
@endsection
