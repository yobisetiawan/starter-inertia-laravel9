import React, { memo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

interface Props {
  field: ControllerRenderProps<FieldValues, string>
  label?: string
  value?: string
  name: string
  type: "checkbox" | "multi-checkbox" | "radio"
  listOptions: Array<any>
  disabled?: boolean
}

const Checkbox = ({
  field,
  label,
  value,
  name,
  type,
  listOptions,
  disabled,
}: Props) => {
  if (type === "multi-checkbox") {
    return (
      <>
        {listOptions.map((x, i) => (
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
              value={x.value}
              name={name}
              checked={field.value.includes(x.value)}
              disabled={disabled}
              id={`check__${name}__val-${x.value}`}
            />
            {x.label && (
              <label
                className="form-check-label ms-2 font-bold"
                htmlFor={`check__${name}__val-${x.value}`}
              >
                {x.label}
              </label>
            )}
          </div>
        ))}
      </>
    )
  }

  if (type === "radio") {
    return (
      <>
        {listOptions.map((x, i) => (
          <div
            className="app-form-radio form-radio d-flex align-items-center me-3"
            key={i}
          >
            <input
              className="form-check-input"
              type="radio"
              checked={field.value.includes(x.value)}
              {...field}
              value={x.value}
              name={name}
              id={`radio__${name}-val__${x.value}`}
              disabled={disabled}
            />
            {x.label && (
              <label
                className="form-check-label ms-2 font-bold"
                htmlFor={`radio__${name}-val__${x.value}`}
              >
                {x.label}
              </label>
            )}
          </div>
        ))}
      </>
    )
  }
  return (
    <div className="app-form-check form-check d-flex align-items-center">
      <input
        className="form-check-input"
        type="checkbox"
        {...field}
        value={value}
        id={`check__${name}-val__${value}`}
        disabled={disabled}
        checked={field.value}
      />
      {label && (
        <label
          className="form-check-label ms-2 font-bold"
          htmlFor={`check__${name}-val__${value}`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

Checkbox.defaultProps = {
  listOptions: [],
  disabled: false,
}

export default memo(Checkbox)
