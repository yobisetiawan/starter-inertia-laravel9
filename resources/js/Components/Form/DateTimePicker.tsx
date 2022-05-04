import React, { memo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"
import DatePicker from "react-datepicker"

interface Props {
  is_invalid?: string
  field: ControllerRenderProps<FieldValues, string>
  placeholder?: string
  formatDate?: string
  disabled?: boolean
}

const DateTimePicker = ({
  is_invalid,
  field,
  placeholder,
  formatDate,
  disabled,
}: Props) => {
  return (
    <div className="app-datetime-picker">
      <DatePicker
        dateFormat={formatDate}
        className={`app-form-control form-control font-bold ${
          is_invalid ? "is-invalid" : ""
        }`}
        placeholderText={placeholder}
        {...field}
        selected={field.value}
        disabled={disabled}
      />
    </div>
  )
}

DateTimePicker.defaultProps = {
  formatDate: "yyyy-MM-dd",
  disabled: false,
}

export default memo(DateTimePicker)
