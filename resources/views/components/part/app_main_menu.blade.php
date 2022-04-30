<div class="app-toggle-main-menu">
    <div class=" d-flex  justify-content-between align-items-center">
        <a href="#" @click="$store.layout.toggleMainMenu(event)">Toggle Menu</a>

        <a href="{{ route('logout') }}" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
            Logout
        </a>
    </div>

</div>
<div class="app-main-menu">

    @component('components.part.nav_logo')
    @endcomponent

    <ul class="list-unstyled list-menu">
        <?php
        $user = auth()->user();
        $permission = \App\Constants\PermissionConst::class;
        $menus = [
            [
                'route_selected' => 'web.dashboard',
                'route_name' => 'web.dashboard',
                'title' => 'Dashboard',
                'permission' => null,
            ],
        ];
        ?>
        @foreach ($menus as $item)
            {{-- @if ($item['permission']) --}}
            @component('components.part.nav_item', $item)
            @endcomponent
            {{-- @endif --}}
        @endforeach

    </ul>
</div>
