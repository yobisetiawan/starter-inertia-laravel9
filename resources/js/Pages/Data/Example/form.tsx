import { EditorState } from "draft-js"
import React from "react"
import { useForm } from "react-hook-form"
import { Input } from "../../../Components"

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      number: "",
      password: "",
      webcam: "",
      is_default: false,
      gender: "",
      check_point: [],
      datepicker: "",
      select: "",
      multi_select: [],
      texteditor: EditorState.createEmpty(),
      cover: [],
      gallery: [],
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // Inertia.post(route("web.data.example.store"), data, {
    //   preserveState: true,
    // })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <Input control={control} name="title" label="Title" placeholder="Title" />
      <Input
        control={control}
        name="number"
        type="number"
        label="Number"
        placeholder="Number"
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
        type="textarea"
        name="description"
        label="Description"
        placeholder="Description"
      />

      <Input
        control={control}
        name="is_default"
        type="checkbox"
        label="Is Default"
        value="1"
        labelCheckbox="Yes I agree"
      />

      <Input
        control={control}
        label="Gender"
        name="gender"
        type="radio"
        listOptions={[
          { value: "F", label: "Female" },
          { value: "M", label: "Male" },
        ]}
      />

      <Input
        control={control}
        label="Multi Checkboxs"
        name="check_point"
        type="multi-checkbox"
        listOptions={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
      />

      <Input
        control={control}
        name="datepicker"
        type="datepicker"
        label="Datepicker"
        placeholder="Datepicker"
      />

      <Input
        control={control}
        name="select"
        type="select"
        label="Select"
        listOptions={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
      />

      <Input
        control={control}
        name="multi_select"
        type="multi-select"
        label="Multi Select"
        listOptions={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
      />

      <Input
        control={control}
        name="texteditor"
        type="texteditor"
        label="Text Editor"
      />

      <Input control={control} name="cover" type="file" label="Cover" />
      
      <Input
        control={control}
        name="gallery"
        type="multi-file"
        label="Gallery"
      />

      {/* <Input control={control} type="webcam" name="webcam" label="Webcam" /> */}

      <input type="submit" className="btn btn-primary app-btn" />
    </form>
  )
}

export default Form
