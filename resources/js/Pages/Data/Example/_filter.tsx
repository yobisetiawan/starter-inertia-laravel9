import { Inertia } from "@inertiajs/inertia"
import React, { memo } from "react"
import { Dropdown } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { Input } from "../../../Components"
import { route } from "../../../Helper"

interface Props {
  baseRoute: string
}

const _filter = ({ baseRoute }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      q: "",
      gender: "",
    },
  })

  const onSubmit = (data: any) => {
    Inertia.get(route(baseRoute + ".index"), data, { preserveState: true })
  }

  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle variant="success" className="app-btn">
        <span className="me-2">Filter</span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end" style={{ minWidth: 280 }}>
        <div className="p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="q" control={control} placeholder="Search" />
            <Input
              control={control}
              name="gender"
              type="select"
              placeholder="Gender"
              listOptions={[
                { value: "F", label: "Female" },
                { value: "M", label: "Male" },
              ]}
            />

            <div className="text-end">
              <button type="submit" className="btn app-btn btn-primary btn-sm">
                Filter
              </button>
            </div>
          </form>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

_filter.defaultProps = {}

export default memo(_filter)
