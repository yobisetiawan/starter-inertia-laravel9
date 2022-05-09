import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Layout, App, Input, Form } from "../../../../Components"
import { route } from "../../../../Helper"

const Page = () => {
  const [isLoading, SetIsLoading] = useState(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      avatar: [],
    },
  })

  const onSubmit = (data: any) => {
    SetIsLoading(true)
    Inertia.post(route("web.profile.avatar.store"), data, {
      preserveState: true,
      forceFormData: true,
      onFinish: () => SetIsLoading(false),
    })
  }

  return (
    <Layout>
      <div className="app-content-wrap p-4 ">
        <App.FlashAlert />
        <h1>Change Avatar</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <Input control={control} name="avatar" type="file" label="Avatar" />

          <Form.Button title="Save" isLoading={isLoading} />
        </form>
      </div>
    </Layout>
  )
}

export default Page
