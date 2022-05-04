import React, { memo } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"
import Select from "react-select"

interface Props {
  selectOptions: Array<any>
  field: ControllerRenderProps<FieldValues, string>
  type: "select" | "selects"
  placeholder?: string
}

const SearchAbleSelect = ({
  selectOptions,
  field,
  type,
  placeholder,
}: Props) => {
  if (type === "selects") {
    return (
      <div className="app-select">
        <Select
          classNamePrefix="app-searchable-select"
          options={selectOptions}
          placeholder={placeholder || "Select"}
          value={selectOptions.map((x) => {
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
        options={selectOptions}
        placeholder={placeholder || "Select"}
        value={selectOptions.find((x) => x.value == field.value)}
        onChange={(e: any) => {
          field.onChange(e.value)
        }}
      />
    </div>
  )
}

SearchAbleSelect.defaultProps = {}

export default memo(SearchAbleSelect)
