import { Link } from "@inertiajs/inertia-react"
import React from "react"

// interface Props {

// }

const AppContentTop = () => {
  return (
    <div className="d-flex p-4 align-items-center">
      <div className="d-flex flex-fill">
        <div className="p-2 ">
          <div className="text-muted ">Today Income</div>
          <div className="h3 font-normal">15.000.000</div>
        </div>
        <div className="py-2 px-5 ">
          <div className="text-muted ">Today Appointment</div>
          <div className="h3 font-normal">30</div>
        </div>
        <div className="py-2 px-5">
          <div className="text-muted ">New Customer</div>
          <div className="h3 font-normal">30</div>
        </div>
      </div>
      <div>
        <Link href="/logout">Logout</Link>
      </div>
    </div>
  )
}

export default AppContentTop
