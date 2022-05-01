import route, { RouteParamsWithQueryOverload } from "ziggy-js"

const Ziggy = require("../ziggy")

const RouteHelper = (name?: any, params?: RouteParamsWithQueryOverload) => {
    return route(name, params, undefined, Ziggy.Ziggy).toString()
}

export default RouteHelper;