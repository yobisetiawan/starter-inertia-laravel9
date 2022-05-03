import React from "react"
import { AppLayout } from "../../../../Components"
import Form from "../form"

const Page = () => {
  return (
    <AppLayout>
      <div className="app-content-wrap p-4">
        <h1>Create</h1>

        <Form />
      </div>
    </AppLayout>
  )
}

export default Page
