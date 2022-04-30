<div class="{{ $class_group ?? null }} mb-3">
    @if ($label ?? false)
        <label for="{{ $field }}" class="form-label">{{ $label }}</label>
    @endIf

    <textarea class="app-form-control form-control font-bold @error($field) is-invalid @enderror" name="{{ $field }}"
        placeholder="{{ $placeholder ?? '' }}"
        rows="{{$rows ?? 4}}"
        {{ !empty($id) ? 'id=' . $id : '' }}>{{ $value ?? old($field, $row->$field ?? null) }}</textarea>

    @error($error_field ?? $field)
        <span class="app-invalid-feedback invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
