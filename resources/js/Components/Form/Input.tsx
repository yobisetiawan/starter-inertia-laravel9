import { usePage } from "@inertiajs/inertia-react"
import React, { memo } from "react"

import { Controller } from "react-hook-form"
import TextEditor from "./TextEditor"
import ErrorValidation from "./ErrorValidation"
import SearchAbleSelect from "./SearchAbleSelect"
import DateTimePicker from "./DateTimePicker"
import FilePicker from "./FilePicker"
import Checkbox from "./Checkbox"

interface Props {
  control: any
  name: string
  type:
    | "text"
    | "password"
    | "file"
    | "multi-file"
    | "textarea"
    | "number"
    | "webcam"
    | "checkbox"
    | "multi-checkbox"
    | "radio"
    | "datepicker"
    | "select"
    | "multi-select"
    | "texteditor"
  label?: string
  labelCheckbox?: string
  placeholder?: string
  rows?: number
  classGroup?: string
  radioIntial?: string
  value?: string
  formatDate?: string
  listOptions: Array<any>
  disabled?: boolean
}

const Input = ({
  control,
  name,
  type,
  label,
  placeholder,
  rows,
  labelCheckbox,
  classGroup,
  value,
  formatDate,
  listOptions,
  disabled,
}: Props) => {
  const { errors } = usePage().props as any

  return (
    <div className={classGroup ? classGroup : "mb-3"}>
      {label && (
        <div>
          <label className="form-label">{label}</label>
        </div>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (type === "file" || type === "webcam" || type === "multi-file") {
            return (
              <FilePicker
                field={field}
                is_invalid={errors[name]}
                type={type}
                disabled={disabled}
              />
            )
          } else if (
            type === "checkbox" ||
            type === "multi-checkbox" ||
            type === "radio"
          ) {
            return (
              <Checkbox
                field={field}
                name={name}
                value={value}
                label={labelCheckbox}
                type={type}
                listOptions={listOptions}
                disabled={disabled}
              />
            )
          } else if (type === "datepicker") {
            return (
              <DateTimePicker
                field={field}
                placeholder={placeholder}
                formatDate={formatDate}
                is_invalid={errors[name]}
                disabled={disabled}
              />
            )
          } else if (type === "select" || type === "multi-select") {
            return (
              <SearchAbleSelect
                field={field}
                placeholder={placeholder}
                listOptions={listOptions}
                type={type}
                disabled={disabled}
              />
            )
          } else if (type === "texteditor" || type === "textarea") {
            return (
              <TextEditor
                field={field}
                rows={rows}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
              />
            )
          } else {
            return (
              <input
                className={`app-form-control form-control font-bold ${
                  errors[name] && "is-invalid"
                }`}
                placeholder={placeholder}
                type={type}
                {...field}
                disabled={disabled}
              />
            )
          }
        }}
      />
      <ErrorValidation name={name} />
    </div>
  )
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  rows: 5,
  listOptions: [],
  disabled: false,
}

export default memo(Input)
