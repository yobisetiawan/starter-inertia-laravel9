import { Link } from "@inertiajs/inertia-react"
import React, { memo } from "react"

interface Props {
  paginate: any
}

const Pagination = ({ paginate }: Props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {(paginate.links || []).map((x: any, i: number) => (
          <li
            key={i}
            className={`page-item ${x.url === null && "disabled"} ${
              x.active && "active"
            }`}
          >
            <Link href={x.url} className="page-link" preserveState>
              <span dangerouslySetInnerHTML={{ __html: x.label }}></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.defaultProps = {}

export default memo(Pagination)
