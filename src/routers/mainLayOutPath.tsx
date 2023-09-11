import { RouteObject } from "react-router-dom"
import HomePage from "../page/HomePage"
import CanteenDetail from "../page/CanteenDetail"

const mainLayOut: RouteObject[] = [
    {
        path: "",
        element: <HomePage />
    },
    {
        path: "canteen/:id",
        element: <CanteenDetail />
    }

]
export default mainLayOut