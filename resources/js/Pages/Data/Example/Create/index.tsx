import React from "react"
import { Layout, App } from "../../../../Components"

import Form from "../_form"

const Page = () => {
  return (
    <Layout>
      <div className="app-content-wrap p-4">
        <App.FlashAlert />

        <h1>Create</h1>

        <Form />
      </div>
    </Layout>
  )
}

export default Page
