import React from "react"
import { Editor } from "react-draft-wysiwyg"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

interface Props {
  is_invalid?: string
  type: "textarea" | "texteditor"
  placeholder?: string
  rows?: number
  field: ControllerRenderProps<FieldValues, string>
  disabled?: boolean
}

const TextEditor = ({
  is_invalid,
  type,
  placeholder,
  rows,
  field,
  disabled,
}: Props) => {
  if (type === "textarea") {
    return (
      <textarea
        className={`app-form-control form-control font-bold ${
          is_invalid ? "is-invalid" : ""
        }`}
        rows={rows}
        placeholder={placeholder}
        {...field}
        disabled={disabled}
      />
    )
  }

  return (
    <div>
      <Editor
        wrapperClassName="app-wrapper-editor"
        editorClassName="app-editor"
        toolbarClassName="app-toolbar-editor"
        editorState={field.value}
        onEditorStateChange={(e: any) => {
          field.onChange(e)
        }}
        readOnly={disabled}
      />
    </div>
  )
}

TextEditor.defaultProps = {
  rows: 5,
  disabled: false,
}

export default TextEditor
