import { usePage } from "@inertiajs/inertia-react"
import React, { memo, useRef } from "react"
import { Controller } from "react-hook-form"
import Webcam from "react-webcam"

interface Props {
  control: any
  name: string
  type: "text" | "password" | "file" | "textarea" | "number" | "webcam"
  label?: string
  placeholder?: string
  rows?: number
}

const Input = ({ control, name, type, label, placeholder, rows }: Props) => {
  const { errors } = usePage().props as any

  //webcam
  const webcamRef = useRef(null) as any

  //end webcam

  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      {type === "webcam" && (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>
      )}
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
          } else if (type === "textarea") {
            return (
              <textarea
                className={`app-form-control form-control font-bold ${
                  errors[name] && "is-invalid"
                }`}
                rows={rows}
                placeholder={placeholder}
                {...field}
              />
            )
          } else if (type === "webcam") {
            console.log(field)
            return (
              <>
                <input type="hidden" {...field} />
                <button
                  type="button"
                  className="app-btn btn btn-dark"
                  onClick={() => {
                    if (webcamRef?.current) {
                      field.onChange(webcamRef?.current?.getScreenshot())
                    }
                  }}
                >
                  Capture
                </button>

                {field.value && (
                  <div className="my-3">
                    <img src={field.value} />
                  </div>
                )}
              </>
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
  placeholder: "",
  rows: 5,
}

export default memo(Input)
