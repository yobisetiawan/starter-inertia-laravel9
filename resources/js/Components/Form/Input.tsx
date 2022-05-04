import { usePage } from "@inertiajs/inertia-react"
import React, { memo, useRef } from "react"
import DatePicker from "react-datepicker"
import { Controller } from "react-hook-form"
import Webcam from "react-webcam"
import Select from "react-select"
import TextEditor from "./TextEditor"
import ErrorValidation from "./ErrorValidation"
import SearchAbleSelect from "./SearchAbleSelect"

interface Props {
  control: any
  name: string
  type:
    | "text"
    | "password"
    | "file"
    | "textarea"
    | "number"
    | "webcam"
    | "checkbox"
    | "radio"
    | "checkboxes"
    | "datepicker"
    | "select"
    | "selects"
    | "texteditor"
  label?: string
  labelCheckbox?: string
  labelRadio?: string
  placeholder?: string
  rows?: number
  classGroup?: string
  radioIntial?: string
  checkboxIntial?: string
  optionsCheck: Array<any>
  labelsCheck: Array<any>
  selectOptions: Array<any>
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
  labelRadio,
  radioIntial,
  checkboxIntial,
  optionsCheck,
  labelsCheck,
  selectOptions,
}: Props) => {
  const { errors } = usePage().props as any

  //webcam
  const webcamRef = useRef(null) as any

  //end webcam

  return (
    <div className={classGroup ? classGroup : "mb-3"}>
      {label && (
        <div>
          <label className="form-label">{label}</label>
        </div>
      )}
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
          } else if (type === "checkbox") {
            return (
              <div className="app-form-check form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  {...field}
                  value={checkboxIntial}
                  id={`check-${name}-val-${checkboxIntial}`}
                />
                {labelCheckbox && (
                  <label
                    className="form-check-label ms-2 font-bold"
                    htmlFor={`check-${name}-val-${checkboxIntial}`}
                  >
                    {labelCheckbox}
                  </label>
                )}
              </div>
            )
          } else if (type === "checkboxes") {
            return (
              <>
                {optionsCheck.map((x, i) => (
                  <div
                    className="app-form-check form-check  me-3 d-flex align-items-center"
                    key={i}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...field}
                      onChange={(e: any) => {
                        const valueCopy = [...field.value]
                        if (e.target.checked) {
                          if (!valueCopy.includes(e.target.value)) {
                            console.log("test")
                            valueCopy.push(e.target.value)
                          }
                        } else {
                          var index = valueCopy.indexOf(e.target.value)
                          if (index !== -1) {
                            valueCopy.splice(index, 1)
                          }
                        }
                        field.onChange(valueCopy)
                      }}
                      value={x}
                      id={`check-${name}-val-${x}`}
                    />
                    {labelsCheck[i] && (
                      <label
                        className="form-check-label ms-2 font-bold"
                        htmlFor={`check-${name}-val-${x}`}
                      >
                        {labelsCheck[i]}
                      </label>
                    )}
                  </div>
                ))}
              </>
            )
          } else if (type === "radio") {
            return (
              <div className="app-form-radio form-radio   d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="radio"
                  {...field}
                  value={radioIntial}
                  id={`radio-${name}-val-${radioIntial}`}
                />
                {labelRadio && (
                  <label
                    className="form-check-label ms-2 font-bold"
                    htmlFor={`radio-${name}-val-${radioIntial}`}
                  >
                    {labelRadio}
                  </label>
                )}
              </div>
            )
          } else if (type === "datepicker") {
            return (
              <DatePicker
                selected={field.value}
                className={`app-form-control form-control font-bold ${
                  errors[name] && "is-invalid"
                }`}
                placeholderText={placeholder}
                {...field}
              />
            )
          } else if (type === "select" || type === "selects") {
            return (
              <SearchAbleSelect
                field={field}
                placeholder={placeholder}
                selectOptions={selectOptions}
                type={type}
              />
            )
          } else if (type === "texteditor") {
            return (
              <TextEditor
                editorState={field.value}
                onChange={(e: any) => {
                  field.onChange(e)
                }}
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
  radioIntial: "",
  checkboxIntial: 1,
  optionsCheck: [],
  labelsCheck: [],
  selectOptions: [],
}

export default memo(Input)
