import React from "react"

interface Props {
  [key: string]: string | number
}

export default function Error({ status }: Props) {
  const title = {
    503: "503: Service Unavailable",
    500: "500: Server Error",
    404: "404: Page Not Found",
    403: "403: Forbidden",
  }[status]

  const description = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page.",
  }[status]

  return (
    <div className="relative min-vh-100 d-flex align-items-center justify-content-center p-5">
      <div className="text-center">
        <div className="">
          <h1>{title}</h1>

          <div className="text-muted">{description}</div>
        </div>
      </div>
    </div>
  )
}
