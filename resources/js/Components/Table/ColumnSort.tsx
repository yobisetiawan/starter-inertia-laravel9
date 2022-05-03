import { Link, usePage } from "@inertiajs/inertia-react"
import React, { memo } from "react"
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io"
import { route } from "../../Helper"

interface Props {
  field: string
  title: string
  routeName: string
}

const ColumnSort = ({ field, title, routeName }: Props) => {
  const { params } = usePage().props as any

  return (
    <div className="d-flex align-items-center">
      <div className="flex-fill">{title}</div>
      <div className="d-flex align-items-center">
        {params?.order_by == field && params?.sort_by == "asc" ? (
          <div>
            <IoIosArrowRoundUp />
          </div>
        ) : (
          <Link href={route(routeName, { sort_by: "asc", order_by: field })}>
            <IoIosArrowRoundUp />
          </Link>
        )}
        {params?.order_by == field && params?.sort_by == "desc" ? (
          <div>
            <IoIosArrowRoundDown />
          </div>
        ) : (
          <Link href={route(routeName, { sort_by: "desc", order_by: field })}>
            <IoIosArrowRoundDown />
          </Link>
        )}
      </div>
    </div>
  )
}

ColumnSort.defaultProps = {}

export default memo(ColumnSort)
