import route, { RouteParamsWithQueryOverload } from "ziggy-js"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Ziggy = require("../ziggy")

const RouteHelper = (name?: any, params?: RouteParamsWithQueryOverload) => {
    return route(name, params, undefined, Ziggy.Ziggy).toString()
}

export default RouteHelper;