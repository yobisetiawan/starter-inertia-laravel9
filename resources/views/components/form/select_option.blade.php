<div class="{{ $class_group ?? null }} mb-3">
    @if ($label ?? false)
        <label for="{{ $field }}" class="form-label">{{ $label }}</label>
    @endIf

    @if (!empty($info))
        <a class="app-info ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="{{ $info }}"></a>
    @endif

    <div class="position-relative {{ !empty($container_input) ? $container_input : '' }}">
        <select name="{{ $field }}" {{ !empty($id) ? 'id=' . $id : '' }}
            class="app-form-select {{ $class ?? '' }} form-select font-bold @error($field) is-invalid @enderror"
            {{ !empty($attr_onchange) ? 'onchange=' . $attr_onchange : '' }}
            {{ !empty($data_target) ? 'data-target=' . $data_target : '' }}
            {{ !empty($data_target1) ? 'data-target1=' . $data_target1 : '' }}
            {{ !empty($data_target2) ? 'data-target2=' . $data_target2 : '' }}
            {{ !empty($data_target3) ? 'data-target3=' . $data_target3 : '' }}
            {{ !empty($data_target4) ? 'data-target3=' . $data_target4 : '' }}
            >
            {{ $slot }}
        </select>
    </div>

    @error($error_field ?? $field)
        <span class="app-invalid-feedback invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
