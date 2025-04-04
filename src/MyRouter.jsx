import { createBrowserRouter } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login"
import App from "./App";
import { Children } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:([
            {
                index: true,
                element: <Login/>,
            },
            {
                path: "/Cadastro",
                element: <Cadastro/>
            }
        ])
    }
])

export default router;