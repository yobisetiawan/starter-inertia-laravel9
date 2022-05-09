import React, { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { Form, Input } from "../../../Components"
import { EditorState } from "draft-js"
import { Inertia } from "@inertiajs/inertia"
import { route, textEditor } from "../../../Helper"
import { usePage } from "@inertiajs/inertia-react"
import moment from "moment-timezone"
import axios from "axios"

const _form = () => {
  const [isLoading, SetIsLoading] = useState(false)

  const { row } = usePage().props as any

  const [lc2, slc2] = useState([]) as any
  const [lc3, slc3] = useState([]) as any

  const isFirstLoad = useRef(true)

  const { control, handleSubmit, watch, setValue } = useForm({
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
      select_cond1: row?.select_cond1 || "",
      select_cond2: row?.select_cond2 || "",
      select_cond3: row?.select_cond3 || "",
      file: "",
      multi_file: "",
      texteditor: row?.texteditor
        ? textEditor.HtmlToDraft(row?.texteditor)
        : EditorState.createEmpty(),
    },
  })

  const onScrollResetPage = () => {
    const dpc = document.getElementById("app-form-example-wrap")
    if (dpc) {
      dpc.scrollTop = 0
    }
  }

  const onSubmit = (data: any) => {
    SetIsLoading(true)
    const finalDt = { ...data }

    finalDt.texteditor = textEditor.DraftToHtml(
      finalDt.texteditor.getCurrentContent()
    )

    if (row) {
      finalDt._method = "put"
      Inertia.post(
        route("web.data.example.update", { id: row.uuid }),
        finalDt,
        {
          onError: onScrollResetPage,
          onFinish: () => SetIsLoading(false),
        }
      )
    } else {
      Inertia.post(route("web.data.example.store"), finalDt, {
        onError: onScrollResetPage,
        forceFormData: true,
        onFinish: () => SetIsLoading(false),
      })
    }
  }

  const getListData = (v: any) => {
    return axios.get(
      route("web.json.example.index", {
        start: v,
      })
    )
  }

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type == "change") {
        if (name === "select_cond1") {
          setValue("select_cond2", null)
          setValue("select_cond3", null)

          slc2([])
          slc3([])
          getListData(value.select_cond1).then((ress) => {
            slc2(ress.data)
          })
        }
        if (name === "select_cond2") {
          setValue("select_cond3", null)
          slc3([])

          getListData(value.select_cond2).then((ress) => {
            slc3(ress.data)
          })
        }
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, setValue])

  useEffect(() => {
    if (isFirstLoad.current) {
      if (row?.select_cond1) {
        getListData(row?.select_cond1).then((ress) => {
          slc2(ress.data)
        })
      }

      if (row?.select_cond2) {
        getListData(row?.select_cond2).then((ress) => {
          slc3(ress.data)
        })
      }

      isFirstLoad.current = false
    }
  })

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
        name="select_cond1"
        type="select"
        label="Select Conditional 1"
        listOptions={[
          { value: "1", label: "Value After 1" },
          { value: "10", label: "Value After 10" },
        ]}
      />

      <Input
        control={control}
        name="select_cond2"
        type="select"
        label="Select Conditional 2"
        listOptions={lc2}
      />

      <Input
        control={control}
        name="select_cond3"
        type="select"
        label="Select Conditional 3"
        listOptions={lc3}
      />

      <Input
        control={control}
        name="texteditor"
        type="texteditor"
        label="Text Editor"
      />

      {row?.webcam && (
        <div className="mb-2">
          <img src={row?.webcam} width={100} alt="" />
        </div>
      )}
      <Input control={control} type="webcam" name="webcam" label="Webcam" />

      {row?.file && (
        <div className="mb-2">
          <img src={row?.file} width={100} alt="" />
        </div>
      )}
      <Input control={control} name="file" type="file" label="File" />

      {row?.multi_file && (
        <div className="d-flex mb-2">
          {(row?.multi_file || []).map((c: any, i: number) => (
            <img src={c} width={100} key={i} className="me-2" alt="" />
          ))}
        </div>
      )}
      <Input
        control={control}
        name="multi_file"
        type="multi-file"
        label="Multi Files"
      />

      <Form.Button title="Save" isLoading={isLoading} />
    </form>
  )
}

export default _form
