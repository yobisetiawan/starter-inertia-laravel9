import React from "react"
import { Layout } from "../../../../Components"

import Form from "../_form"

const Page = () => {
  return (
    <Layout>
      <div className="app-content-wrap p-4">
        <h1>Create</h1>

        <Form />
      </div>
    </Layout>
  )
}

export default Page
