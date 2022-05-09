import React, { memo } from "react"

interface Props {
  title: string
  disabled?: boolean
  isLoading?: boolean
  type?: "submit" | "button" | "reset"
  variant?: "primary" | "success"
}

const Button = ({ title, disabled, isLoading, type, variant }: Props) => {
  return (
    <button
      style={{ minWidth: 95 }}
      type={type}
      disabled={disabled || isLoading}
      className={`btn btn-${variant} app-btn`}
    >
      {isLoading ? "Loading" : title}
    </button>
  )
}

Button.defaultProps = {
  type: "submit",
  variant: "primary",
}

export default memo(Button)
