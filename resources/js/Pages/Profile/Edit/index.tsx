import { Inertia } from "@inertiajs/inertia"
import { Link, usePage } from "@inertiajs/inertia-react"
import React from "react"
import { useForm } from "react-hook-form"
import { AppLayout, FlashAlert, Input } from "../../../Components"
import { route } from "../../../Helper"

// interface Props {

// }

const Page = () => {
  const { auth } = usePage().props as any
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: auth?.user?.name || "",
    },
  })

  const onSubmit = (data: any) => {
    Inertia.post(route("web.profile.save"), data, {
      preserveState: true,
    })
  }

  return (
    <AppLayout>
      <div className="app-content-wrap p-4 ">
        <FlashAlert />
        <h1>Profile</h1>

        {auth?.user?.avatar?.url && (
          <div className="mb-3">
            <img src={auth.user.avatar.url} alt="" />
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <Input control={control} name="name" />

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
