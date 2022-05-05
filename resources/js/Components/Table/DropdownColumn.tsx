import React, { memo } from "react"
import { Dropdown } from "react-bootstrap"
import Form from "../Form"

interface Props {
  listColumn: Array<any>
  onChange?: (e: any) => void
}

const DropdownColumn = ({ listColumn, onChange }: Props) => {
  return (
    <div className="position-absolute" style={{ right: 0, top: 0, zIndex: 10 }}>
      <Dropdown autoClose="outside">
        <Dropdown.Toggle variant="success" size="sm"></Dropdown.Toggle>

        <Dropdown.Menu align="end">
          <div className="px-2">
            <div className="text-muted">Show Column</div>
            {listColumn.map((c, i) => (
              <div key={i}>
                <Form.BaseCheckbox
                  onChange={onChange}
                  value={c.field}
                  label={c.title}
                  checked={c.show}
                />
              </div>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

DropdownColumn.defaultProps = {}

export default memo(DropdownColumn)
