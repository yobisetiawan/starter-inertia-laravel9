import { Inertia } from "@inertiajs/inertia"
import React from "react"
import { useForm } from "react-hook-form"
import { AppLayout, FlashAlert, Input } from "../../../../Components"
import { route } from "../../../../Helper"

const Page = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },
  })

  const onSubmit = (data: any) => {
    Inertia.post(route("web.profile.password.store"), data, {
      preserveState: true,
      onSuccess: (page) => {
        reset()
      },
    })
  }

  return (
    <AppLayout>
      <div className="app-content-wrap p-4 ">
        <FlashAlert />
        <h1>Change Password</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            name="old_password"
            type="password"
            label="Old Password"
          />
          <Input
            control={control}
            name="password"
            type="password"
            label="Password"
          />
          <Input
            control={control}
            name="password_confirmation"
            type="password"
            label="Password Confirmation"
          />

          <input type="submit" className="btn btn-primary app-btn" />
        </form>
      </div>
    </AppLayout>
  )
}

export default Page
