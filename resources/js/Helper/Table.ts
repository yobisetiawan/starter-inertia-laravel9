const checkHide = (field: string, columnHide: Array<any>) => {
    let x = columnHide.find((o) => o.field == field)
    return x?.show
}

const Table = {
    checkHide
}

export default Table