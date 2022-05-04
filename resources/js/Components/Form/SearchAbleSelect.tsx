import React, { memo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"
import Select from "react-select"

interface Props {
  listOptions: Array<any>
  field: ControllerRenderProps<FieldValues, string>
  type: "select" | "multi-select"
  placeholder?: string
}

const SearchAbleSelect = ({
  listOptions,
  field,
  type,
  placeholder,
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
      />
    </div>
  )
}

SearchAbleSelect.defaultProps = {
  listOptions: []
}

export default memo(SearchAbleSelect)
