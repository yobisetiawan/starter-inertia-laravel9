import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Layout, App, Input, Form } from "../../../../Components"
import { route } from "../../../../Helper"

const Page = () => {
  const [isLoading, SetIsLoading] = useState(false)

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },
  })

  const onSubmit = (data: any) => {
    SetIsLoading(true)
    Inertia.post(route("web.profile.password.store"), data, {
      preserveState: true,
      onSuccess: () => {
        reset()
      },
      onFinish: () => SetIsLoading(false),
    })
  }

  return (
    <Layout>
      <div className="app-content-wrap p-4 ">
        <App.FlashAlert />
        <h1>Change Password</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            name="old_password"
            type="password"
            label="Old Password"
            placeholder="Old Password"
          />
          <Input
            control={control}
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <Input
            control={control}
            name="password_confirmation"
            type="password"
            label="Password Confirmation"
            placeholder="Password Confirmation"
          />

          <Form.Button title="Save" isLoading={isLoading} />
        </form>
      </div>
    </Layout>
  )
}

export default Page
