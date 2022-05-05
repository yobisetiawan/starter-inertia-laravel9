import { Inertia } from "@inertiajs/inertia"
import React from "react"
import { useForm } from "react-hook-form"
import { Layout, App, Input } from "../../../../Components"
import { route } from "../../../../Helper"

const Page = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      avatar: [],
    },
  })

  const onSubmit = (data: any) => {
    Inertia.post(route("web.profile.avatar.store"), data, {
      preserveState: true,
      forceFormData: true,
    })
  }

  return (
    <Layout>
      <div className="app-content-wrap p-4 ">
      <App.FlashAlert />
        <h1>Change Avatar</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <Input control={control} name="avatar" type="file" label="Avatar" />

          <input type="submit" className="btn btn-primary app-btn" />
        </form>
      </div>
    </Layout>
  )
}

export default Page
