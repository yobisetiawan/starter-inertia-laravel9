@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        @component('components.part.app_header')
            <h1>Change Profile</h1>
        @endcomponent
        @component('components.alert.success')
        @endcomponent

        <div class="row">
            <div class="col-md-6">


                <form action="{{ route('web.profile.save') }}" method="POST" class="mb-3">
                    @csrf
                    @component('components.form.input', [
                        'field' => 'name',
                        'label' => 'Name',
                        'row' => auth()->user(),
                        ])
                    @endcomponent

                    <button type="submit" class="btn app-btn btn-primary">
                        <div class="px-5">Save</div>
                    </button>
                </form>

                <div>
                    <a href="{{route('web.profile.change.password')}}">Change Password</a> 
                </div>
                <div>
                    <a href="{{route('web.profile.change.avatar')}}">Change Avatar</a>
                </div>



            </div>
        </div>
    </div>
@endsection
