import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />,
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />,
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />,
            },
            {
                name: 'Create Member',
                path: 'create-member',
                element: <CreateStudent />,
            },
        ],
    },
];

type TadminRoutes = {
    path: string,
    element: ReactNode
}

export const adminRutes = adminPaths.reduce((acc: TadminRoutes[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element,
        });
    }
    if (item.children) {
        item.children.forEach(child => {
            acc.push({
                path: child.path,
                element: child.element,
            })
        })
    }
    return acc
}, [])