import React from "react"
import { useForm } from "react-hook-form"
import { Input } from "../../../Components"
import { EditorState } from "draft-js"
import { Inertia } from "@inertiajs/inertia"
import { route, textEditor } from "../../../Helper"

const _form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      number: "",
      password: "",
      webcam: "",
      is_default: false,
      gender: "",
      multi_check: [],
      date: "",
      select: "",
      multi_select: [],
      file: [],
      multi_file: [],
      texteditor: EditorState.createEmpty(),
      
    },
  })

  const onSubmit = (data: any) => {
    let finalDt = { ...data }

    finalDt.texteditor = textEditor.DraftToHtml(finalDt.texteditor.getCurrentContent())

    console.log(finalDt)
    Inertia.post(route("web.data.example.store"), finalDt, {
      preserveState: true,
      forceFormData: true,
    })
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
        name="multi_check"
        type="multi-checkbox"
        listOptions={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
      />

      <Input
        control={control}
        name="date"
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

      <Input control={control} name="file" type="file" label="File" />

      <Input
        control={control}
        name="multi_file"
        type="multi-file"
        label="Multi Files"
      />

      {/* <Input control={control} type="webcam" name="webcam" label="Webcam" /> */}

      <input type="submit" className="btn btn-primary app-btn" />
    </form>
  )
}

export default _form
