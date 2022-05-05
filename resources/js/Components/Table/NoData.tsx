import React, { memo } from "react"

interface Props {
  list: Array<any>
}

const NoData = ({ list }: Props) => {
  return (
    <>
      {list.length === 0 && (
        <tr>
          <td colSpan={50}>No Data</td>
        </tr>
      )}
    </>
  )
}

NoData.defaultProps = {}

export default memo(NoData)
