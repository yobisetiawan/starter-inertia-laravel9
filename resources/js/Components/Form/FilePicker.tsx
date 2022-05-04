import React, { memo, useRef } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"
import Webcam from "react-webcam"

interface Props {
  is_invalid?: string
  field: ControllerRenderProps<FieldValues, string>
  type?: "file" | "webcam" | "multi-file"
}

const FilePicker = ({ is_invalid, field, type }: Props) => {
  const webcamRef = useRef(null) as any

  if (type === "webcam") {
    return (
      <>
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>
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
  }
  return (
    <input
      className={`app-form-control form-control font-bold ${
        is_invalid ? "is-invalid" : ""
      }`}
      type="file"
      multiple={type === "multi-file"}
      {...field}
      value={field.value.filename}
      onChange={(event) => {
        if (event?.target?.files) {
          if (type === "multi-file") {
            field.onChange(event?.target?.files)
          } else {
            field.onChange(event?.target?.files[0])
          }
        } else {
          field.onChange([])
        }
      }}
    />
  )
}

FilePicker.defaultProps = {}

export default memo(FilePicker)
