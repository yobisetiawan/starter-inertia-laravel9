import { Link } from "@inertiajs/inertia-react"
import React from "react"
import { AppLayout, FlashAlert, Pagination } from "../../../Components"
import { route } from "../../../Helper"

interface Props {
  list: Array<any>
}
const Page = ({ list }: Props) => {
  return (
    <AppLayout>
      <div className="app-content-wrap p-4">
        <FlashAlert />

        <h1>Example</h1>

        <Link href={route("web.data.example.create")}>Create</Link>

        <table></table>

        <Pagination paginate={list}></Pagination>
      </div>
    </AppLayout>
  )
}

export default Page
