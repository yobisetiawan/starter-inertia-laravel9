const checkHide = (field: string, columnHide: Array<any>) => {
    let x = columnHide.find((o) => o.field == field)
    return x?.show
}

const onColumnShowHide = (e: any, listColumn: Array<any>, onChange: (ress: any) => void) => {
    let field = e.target.value
    let cCh = [...listColumn]
    cCh.forEach((el) => {
        if (el.field == field) {
            el.show = !el.show
        }
    })
    onChange(cCh)
}

const Table = {
    checkHide,
    onColumnShowHide
}

export default Table