import { Link } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { App, Layout, Table } from "../../../Components"
import { route, table } from "../../../Helper"
import Filter from "./_filter"
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

  const baseRoute = "web.data.example"

  const listDt = list?.data || []

  return (
    <Layout>
      <div className="app-content-wrap p-4">
        <App.FlashAlert />

        <h1>Example</h1>

        <div className="d-flex justify-content-between mb-4">
          <Link
            href={route(baseRoute + ".create")}
            className="app-btn btn btn-primary "
          >
            + Create
          </Link>

          <Filter baseRoute={baseRoute} />
        </div>

        <div className="position-relative">
          <Table.DropdownColumn
            listColumn={ch}
            onChange={(e) => table.onColumnShowHide(e, ch, sch)}
          />

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
                        routeName={baseRoute + ".index"}
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
                      href={route(baseRoute + ".edit", { id: x.uuid })}
                    >
                      Edit
                    </Link>
                    <Link
                      method="DELETE"
                      as="button"
                      className="btn btn-link btn-sm"
                      href={route(baseRoute + ".destroy", { id: x.uuid })}
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
