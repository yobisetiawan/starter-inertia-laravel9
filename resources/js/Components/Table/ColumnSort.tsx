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

  const mergeRoute = (def: any) => {
    if (params) {
      const nParams = { ...params }
      Object.keys(def).forEach((key) => {
        nParams[key] = def[key]
      })
      return nParams
    }

    return def
  }

  return (
    <div className="d-flex align-items-center">
      <div className="flex-fill">{title}</div>
      <div className="d-flex align-items-center">
        {params?.order_by == field && params?.sort_by == "asc" ? (
          <div>
            <IoIosArrowRoundUp />
          </div>
        ) : (
          <Link
            href={route(
              routeName,
              mergeRoute({ sort_by: "asc", order_by: field })
            )}
            preserveState
          >
            <IoIosArrowRoundUp />
          </Link>
        )}
        {params?.order_by == field && params?.sort_by == "desc" ? (
          <div>
            <IoIosArrowRoundDown />
          </div>
        ) : (
          <Link
            href={route(
              routeName,
              mergeRoute({ sort_by: "desc", order_by: field })
            )}
            preserveState
          >
            <IoIosArrowRoundDown />
          </Link>
        )}
      </div>
    </div>
  )
}

ColumnSort.defaultProps = {}

export default memo(ColumnSort)
