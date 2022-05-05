import { usePage } from "@inertiajs/inertia-react"
import React, { memo, useEffect, useState } from "react"
import { Alert } from "react-bootstrap"

const FlashAlert = () => {
  const { flash } = usePage().props as any

  const [show, setShow] = useState(true)

  useEffect(() => {
    if (flash?.success_message || flash?.error_message) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [flash])

  if (show && flash?.success_message) {
    return (
      <Alert
        variant="primary"
        show={show}
        onClose={() => setShow(false)}
        dismissible
      >
        <div>{flash.success_message}</div>
      </Alert>
    )
  }
  if (show && flash?.error_message) {
    return (
      <Alert
        variant="danger"
        show={show}
        onClose={() => setShow(false)}
        dismissible
      >
        <div>{flash.error_message}</div>
      </Alert>
    )
  }

  return <></>
}

export default memo(FlashAlert)
