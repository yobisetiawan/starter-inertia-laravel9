import React, { memo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"
import Select from "react-select"

interface Props {
  listOptions: Array<any>
  field: ControllerRenderProps<FieldValues, string>
  type: "select" | "multi-select"
  placeholder?: string
  disabled?:boolean
}

const SearchAbleSelect = ({
  listOptions,
  field,
  type,
  placeholder,
  disabled
}: Props) => {
  if (type === "multi-select") {
    return (
      <div className="app-select">
        <Select
          classNamePrefix="app-searchable-select"
          options={listOptions}
          placeholder={placeholder || "Select"}
          value={listOptions.map((x) => {
            if (field.value.includes(x.value)) {
              return x
            }
          })}
          onChange={(e: any) => {
            let selected = [] as any
            e.forEach((el: any) => {
              selected.push(el.value)
            })
            field.onChange(selected)
          }}
          isMulti
          isDisabled={disabled}
        />
      </div>
    )
  }
  return (
    <div className="app-select">
      <Select
        classNamePrefix="app-searchable-select"
        options={listOptions}
        placeholder={placeholder || "Select"}
        value={listOptions.find((x) => x.value == field.value)}
        onChange={(e: any) => {
          field.onChange(e.value)
        }}
        isDisabled={disabled}
      />
    </div>
  )
}

SearchAbleSelect.defaultProps = {
  listOptions: [],
  disabled: false
}

export default memo(SearchAbleSelect)
