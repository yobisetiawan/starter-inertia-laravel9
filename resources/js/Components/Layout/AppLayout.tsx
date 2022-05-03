import { Head, usePage } from "@inertiajs/inertia-react"
import React, { memo } from "react"
import AppContentTop from "./AppContentTop"
import AppMainMenu from "./AppMainMenu"

interface Props {
  children: React.ReactNode
  title?: string
}

const AppLayout = ({ children, title }: Props) => {
  const { config } = usePage().props as any

  return (
    <>
      <Head title={config.name + (title ? " | " + title : "")} />
      <div className="app-main-sidebar">
        <AppMainMenu />
      </div>
      <div className="app-main-content flex-fill d-flex flex-column">
        <div className="app-content-top">
          <AppContentTop />
        </div>
        <div className="app-content flex-fill">{children}</div>
      </div>
    </>
  )
}

AppLayout.defaultProps = {}

export default memo(AppLayout)
