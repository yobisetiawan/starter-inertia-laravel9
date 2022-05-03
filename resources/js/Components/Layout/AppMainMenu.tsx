import { Link } from "@inertiajs/inertia-react"
import React, { memo } from "react"
import { route } from "../../Helper"

// interface Props {

// }

const AppMainMenu = () => {
  const menu = [
    { title: "Dashboard", route: route("web.dashboard") },
    { title: "Profile", route: route("web.profile.show") }, 
    { title: "Example", route: route("web.dashboard") },
  ]
  return (
    <div className="app-content-wrap">
      <div className="app-logo d-flex align-items-center m-4  ">
        <div className="text-center flex-fill">
          <Link href="/dashboard" className="h2 text-decoration-none">
            App Logo
          </Link>
        </div>
      </div>
      <div className="app-main-menu">
        <ul className="list-unstyled list-menu my-4">
          {menu.map((x, i) => (
            <li key={i}>
              <Link href={x.route}>{x.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

AppMainMenu.defaultProps = {}

export default memo(AppMainMenu)
