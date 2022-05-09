import React from "react"
import { render } from "react-dom"
import { createInertiaApp } from "@inertiajs/inertia-react"
import { InertiaProgress } from "@inertiajs/progress"

InertiaProgress.init()

createInertiaApp({
  // eslint-disable-next-line no-undef
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
