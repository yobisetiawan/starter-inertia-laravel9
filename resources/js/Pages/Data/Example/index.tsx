import { Link } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { Dropdown } from "react-bootstrap"
import { App, Form, Layout, Table } from "../../../Components"
import { route, table } from "../../../Helper"

interface Props {
  list: any
}

const Page = ({ list }: Props) => {
  const [ch, sch] = useState([
    { field: "id", title: "ID", show: true },
    { field: "title", title: "Title", show: true },
    { field: "gender", title: "Gender", show: true },
    { field: "date", title: "Date", show: true },
    { field: "is_default", title: "Is Default", show: false },
    { field: "password", title: "Password", show: false },
    { field: "number", title: "Number", show: true },
  ])

  let rn = "web.data.example.index"

  let listDt = list?.data || []

  const _handleColumnHide = (e: any) => {
    let field = e.target.value
    let cCh = [...ch]
    cCh.forEach((el) => {
      if (el.field == field) {
        el.show = !el.show
      }
    })
    sch(cCh)
  }

  return (
    <Layout>
      <div className="app-content-wrap p-4">
        <App.FlashAlert />

        <h1>Example</h1>

        <p>
          <Link
            href={route("web.data.example.create")}
            className="app-btn btn btn-primary "
          >
            + Create
          </Link>
        </p>
        <div className="position-relative">
          <div
            className="position-absolute"
            style={{ right: 0, top: 0, zIndex: 10 }}
          >
            <Dropdown autoClose="outside">
              <Dropdown.Toggle variant="success" size="sm"></Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <div className="px-2">
                  <div className="text-muted">Show Column</div>
                  {ch.map((c, i) => (
                    <div key={i}>
                      <Form.BaseCheckbox
                        onChange={_handleColumnHide}
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

          <table className="table table-borderless">
            <thead>
              <tr style={{ borderBottom: "1px solid #ddd" }}>
                {ch.map((c, i) => {
                  if (!c.show) {
                    return <React.Fragment key={i} />
                  }
                  return (
                    <th key={i}>
                      <Table.ColumnSort
                        title={c.title}
                        field={c.field}
                        routeName={rn}
                      />
                    </th>
                  )
                })}

                <th style={{ width: 120 }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {listDt.map((x: any) => {
                const _actions = (
                  <td>
                    <Link
                      as="button"
                      className="btn btn-link btn-sm ps-0"
                      href={route("web.data.example.edit", { id: x.uuid })}
                    >
                      Edit
                    </Link>
                    <Link
                      method="DELETE"
                      as="button"
                      className="btn btn-link btn-sm"
                      href={route("web.data.example.destroy", { id: x.uuid })}
                      only={["list", "flash"]}
                      onBefore={() => confirm("Are You Sure?")}
                    >
                      Delete
                    </Link>
                  </td>
                )
                return (
                  <tr key={x.id}>
                    {ch.map((c, ii) => {
                      if (!c.show) {
                        return <React.Fragment key={ii} />
                      }
                      return <td key={ii}>{x[c.field].toString()}</td>
                    })}

                    {_actions}
                  </tr>
                )
              })}

              {listDt.length === 0 && (
                <tr>
                  <td colSpan={50}>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Table.Pagination paginate={list}></Table.Pagination>
      </div>
    </Layout>
  )
}

export default Page
