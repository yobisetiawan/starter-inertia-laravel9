import { usePage } from "@inertiajs/inertia-react"
import React, { memo } from "react"
import { Controller } from "react-hook-form"

interface Props {
  control: any
  name: string
  type: "text" | "password" | "file"
}

const Input = ({ control, name, type }: Props) => {
  const { errors } = usePage().props as any
  return (
    <div className="mb-3">
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (type === "file") {
            return (
              <input
                className={`app-form-control form-control font-bold ${
                  errors[name] && "is-invalid"
                }`}
                type={type}
                {...field}
                value={field.value.filename}
                onChange={(event) => {
                  if (event?.target?.files) {
                    return field.onChange(event?.target?.files[0])
                  }
                }}
              />
            )
          } else {
            return (
              <input
                className={`app-form-control form-control font-bold ${
                  errors[name] && "is-invalid"
                }`}
                type={type}
                {...field}
              />
            )
          }
        }}
      />
      {errors[name] && (
        <span className="app-invalid-feedback invalid-feedback" role="alert">
          <strong>{errors[name]}</strong>
        </span>
      )}
    </div>
  )
}

Input.defaultProps = {
  type: "text",
}

export default memo(Input)
