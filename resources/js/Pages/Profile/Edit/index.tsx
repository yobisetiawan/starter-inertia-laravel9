import { Inertia } from "@inertiajs/inertia"
import { Link, usePage } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Layout, App, Input, Form } from "../../../Components"
import { route } from "../../../Helper"

const Page = () => {
  const { auth } = usePage().props as any
  const [isLoading, SetIsLoading] = useState(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: auth?.user?.name || "",
    },
  })

  const onSubmit = (data: any) => {
    SetIsLoading(true)
    Inertia.post(route("web.profile.store"), data, {
      preserveState: true,
      onFinish: () => SetIsLoading(false),
    })
  }

  return (
    <Layout>
      <div className="app-content-wrap p-4 ">
        <App.FlashAlert />
        <h1>Profile</h1>

        {auth?.user?.avatar?.url && (
          <div className="mb-3">
            <img src={auth.user.avatar.url} alt="" />
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <Input control={control} name="name" label="Name" />

          
          <Form.Button title="Save" isLoading={isLoading} />
        </form>

        <div>
          <Link href={route("web.profile.password.index")}>
            Change Password
          </Link>
        </div>

        <div>
          <Link href={route("web.profile.avatar.index")}>Change Avatar</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Page
