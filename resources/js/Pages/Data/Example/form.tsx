import { Inertia } from "@inertiajs/inertia"
import React from "react"
import { useForm } from "react-hook-form"
import { Input } from "../../../Components"
import { route } from "../../../Helper"

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      number: "",
      password: "",
      webcam: ""
    },
  })

  const onSubmit = (data: any) => {
    Inertia.post(route("web.data.example.store"), data, {
      preserveState: true,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <Input control={control} name="title" label="Title" placeholder="Title" />
      <Input control={control} name="number" type="number" label="Number" placeholder="Number" />
      <Input control={control} name="password" type="password" label="Password" placeholder="Password" />
      <Input control={control} type="textarea" name="description" label="Description" placeholder="Description"/>

      {/* <Input control={control} type="webcam" name="webcam" label="Webcam"/> */}

      <input type="submit" className="btn btn-primary app-btn" />
    </form>
  )
}

export default Form
