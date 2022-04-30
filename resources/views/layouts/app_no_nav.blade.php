<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @component('components.part.app_head')@endcomponent
</head>

<body x-data>
    <div id="app"> 
        
        <main class="py-4">
            @yield('content')
        </main>
    </div>

    
    @yield('modal')
    @yield('script')
</body>

</html>