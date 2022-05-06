import React from "react"
import { Layout } from "../../../../Components"

import Form from "../_form"

const Page = () => {
  return (
    <Layout>
      <div className="app-content-wrap p-4" id="app-form-example-wrap">
        <h1>Edit</h1>

        <Form />
      </div>
    </Layout>
  )
}

export default Page
