import React, { memo } from "react"

import { usePage } from "@inertiajs/inertia-react"

interface Props {
  name: string
}

const ErrorValidation = ({ name }: Props) => {
  const { errors } = usePage().props as any

  return (
    <div>
      {errors[name] && (
        <span className="app-invalid-feedback invalid-feedback" role="alert">
          <strong>{errors[name]}</strong>
        </span>
      )}
    </div>
  )
}

ErrorValidation.defaultProps = {}

export default memo(ErrorValidation)
