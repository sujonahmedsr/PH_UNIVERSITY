import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import adminPaths from "./Admin.route";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: '/admin',
        element: <App></App>,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App></App>,
        children: routeGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <App></App>,
        children: routeGenerator(studentPaths)
    },
    {
        path: '/login',
        element: <Login />
    }
])

