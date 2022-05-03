import { Inertia } from "@inertiajs/inertia"
import { Link, usePage } from "@inertiajs/inertia-react"
import React from "react"
import { useForm } from "react-hook-form"
import { AppLayout, FlashAlert, Input } from "../../../../Components"
import { route } from "../../../../Helper"

// interface Props {

// }

const Page = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      avatar: [],
    },
  })

  const onSubmit = (data: any) => {
    Inertia.post(route("web.profile.change.avatar.save"), data, {
      preserveState: true,
      forceFormData: true
    })
    console.log(data)
  }

  return (
    <AppLayout>
      <div className="app-content-wrap p-4 ">
        <FlashAlert />
        <h1>Change Avatar</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <Input control={control} name="avatar" type="file" />

          <input type="submit" className="btn btn-primary app-btn" />
        </form>

        <div>
          <Link href={route("web.profile.change.password")}>
            Change Password
          </Link>
        </div>

        <div>
          <Link href={route("web.profile.change.avatar")}>Change Avatar</Link>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page
