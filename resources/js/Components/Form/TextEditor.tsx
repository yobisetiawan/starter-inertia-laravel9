import React from "react"
import { convertToRaw } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import htmlToDraft from "html-to-draftjs"

interface Props {
  onChange: (e: any) => void
  editorState: any
}

const TextEditor = ({ onChange, editorState }: Props) => {
  return (
    <div>
      <Editor
        wrapperClassName="app-wrapper-editor"
        editorClassName="app-editor"
        toolbarClassName="app-toolbar-editor"
        editorState={editorState}
        onEditorStateChange={onChange}
      />
    </div>
  )
}

TextEditor.defaultProps = {}

export default TextEditor
