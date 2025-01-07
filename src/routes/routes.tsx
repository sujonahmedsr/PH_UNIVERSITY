import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import { adminRutes } from "./Admin.route";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <div>This is home page</div>
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: '/admin',
        element: <App></App>,
        children: adminRutes
    }
])