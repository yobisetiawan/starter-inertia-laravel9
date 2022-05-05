import { Link } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { App, Layout, Table } from "../../../Components"
import { route } from "../../../Helper"

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
          <Table.DropdownColumn listColumn={ch} onChange={_handleColumnHide} />

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

              <Table.NoData list={listDt} />
            </tbody>
          </table>
        </div>

        <Table.Pagination paginate={list}></Table.Pagination>
      </div>
    </Layout>
  )
}

export default Page
