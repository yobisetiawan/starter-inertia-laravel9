@if (\Session::has($name ?? 'success_msg'))
<div class="alert alert-primary">
    {!! \Session::get($name ?? 'success_msg') !!}
</div>
@endif