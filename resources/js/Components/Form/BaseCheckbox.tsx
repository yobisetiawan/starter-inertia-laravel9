import React, { memo } from "react"

interface Props {
  value?: string
  onChange?: (e: any) => void
  checked?: boolean
  label?: string
}

const BaseCheckbox = ({ value, onChange, checked, label }: Props) => {
  return (
    <div className="app-form-check form-check d-flex align-items-center">
      <input
        checked={checked}
        className="form-check-input"
        type="checkbox"
        value={value}
        onChange={onChange}
        id={"base_ch_" + value}
      />
      {label && (
        <label
          className="form-check-label ms-2 font-bold"
          htmlFor={"base_ch_" + value}
        >
          {label}
        </label>
      )}
    </div>
  )
}

BaseCheckbox.defaultProps = {}

export default memo(BaseCheckbox)
