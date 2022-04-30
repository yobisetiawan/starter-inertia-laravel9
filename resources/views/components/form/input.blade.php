<div class="{{ $class_group ?? null }} mb-3">
    @if ($label ?? false)
        <label for="{{ $field }}" class="form-label">{{ $label }}</label>
    @endIf

    <div class="position-relative {{ !empty($container_input) ? $container_input : '' }}">
        @if (!empty($start_label))
            <div class="app-start-label">{{ $start_label }}</div>
        @endif
        <input type="{{ $type ?? 'text' }}"
            class="app-form-control {{$class ?? ''}} form-control font-bold @error($field) is-invalid @enderror {{ !empty($start_label) ? 'ps-5' : '' }} {{ !empty($end_label) ? 'pe-5' : '' }}"
            name="{{ $field }}" value="{{ $value ?? old($field, $row->$field ?? null) }}"
            placeholder="{{ $placeholder ?? '' }}" 
            {{ !empty($id) ? 'id=' . $id : '' }}
            {{ !empty($readonly) && $readonly ? 'readonly' : '' }}
            {{ !empty($attr_max) ? 'max='.$attr_max : '' }}
            {{ !empty($attr_min) ? 'min='.$attr_min : '' }}
            {{ !empty($min_date) ? 'min_date='.$min_date : ''}}
            {{ !empty($only_day) ? 'only_day='.$only_day : ''}}
            >
        @if (!empty($end_label))
            <div class="app-end-label">{{ $end_label }}</div>
        @endif

        @if (!empty($type) && $type == 'password')
            <a href="#" class="app-btn-toggle-password text-decoration-none" @click="$store.basic.togglePassword($el, event)">
                <i class="las la-eye"></i>
            </a>
        @endif
    </div>

    @if (!empty($info))
        <div class="app-info">{{ $info }}</div>
    @endif

    @error($error_field ?? $field)
        <span class="app-invalid-feedback invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
