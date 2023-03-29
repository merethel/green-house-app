import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/Root"
import Hjem from "./routes/Hjem"
import Maalinger from "./routes/Maalinger"
import { RouterProvider, createHashRouter } from "react-router-dom"

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Hjem />,
            },
            {
                path: "/Målinger",
                element: <Maalinger />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)