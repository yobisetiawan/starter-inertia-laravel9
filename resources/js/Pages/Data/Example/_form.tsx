import React from "react"
import { useForm } from "react-hook-form"
import { Input } from "../../../Components"
import { EditorState } from "draft-js"
import { Inertia } from "@inertiajs/inertia"
import { route, textEditor } from "../../../Helper"
import { usePage } from "@inertiajs/inertia-react"
import moment from "moment-timezone"

const _form = () => {
  const { row } = usePage().props as any

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: row?.title || "",
      description: row?.description || "",
      number: row?.number || "",
      password: row?.password || "",
      webcam: "",
      is_default: row?.is_default || false,
      gender: row?.gender || "",
      multi_check: row?.multi_check || [],
      date: row?.date ? moment(row.date).toDate() : "",
      select: row?.select || "",
      multi_select: row?.multi_select || [],
      file: [],
      multi_file: [],
      texteditor: row?.texteditor
        ? textEditor.HtmlToDraft(row?.texteditor)
        : EditorState.createEmpty(),
    },
  })

  const onSubmit = (data: any) => {
    let finalDt = { ...data }

    finalDt.texteditor = textEditor.DraftToHtml(
      finalDt.texteditor.getCurrentContent()
    )

    if (row) {
      Inertia.put(route("web.data.example.update", { id: row.uuid }), finalDt)
    } else {
      Inertia.post(route("web.data.example.store"), finalDt)
    }
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

      <Input control={control} type="webcam" name="webcam" label="Webcam" />

      <Input control={control} name="file" type="file" label="File" />

      <Input
        control={control}
        name="multi_file"
        type="multi-file"
        label="Multi Files"
      />

      <input type="submit" className="btn btn-primary app-btn" />
    </form>
  )
}

export default _form
