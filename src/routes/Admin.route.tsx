import AcademicDepartment from "../pages/Admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/Admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/Admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/Admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/Admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/Admin/academicManagement/CreateAcademicSemester";
import CreateAdmin from "../pages/Admin/academicManagement/userManagement/CreateAdmin";
import CreateFaculty from "../pages/Admin/academicManagement/userManagement/CreateFaculty";
import CreateStudent from "../pages/Admin/academicManagement/userManagement/CreateStudent";
import StudentData from "../pages/Admin/academicManagement/userManagement/StudentData";
import StudentDetails from "../pages/Admin/academicManagement/userManagement/StudentDetails";
import AdminDashboard from "../pages/Admin/AdminDashboard";

const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Create A. Semester',
                path: 'create-academic-semester',
                element: <CreateAcademicSemester />,
              },
              {
                name: 'Academic Semester',
                path: 'academic-semester',
                element: <AcademicSemester />,
              },
              {
                name: 'Create A. Faculty',
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty />,
              },
              {
                name: 'Academic Faculty',
                path: 'academic-faculty',
                element: <AcademicFaculty />,
              },
              {
                name: 'Create A. Department',
                path: 'create-academic-department',
                element: <CreateAcademicDepartment />,
              },
              {
                name: 'Academic Department',
                path: 'academic-department',
                element: <AcademicDepartment />,
              },
        ],
    },
    {
        name: 'User Management',
        children: [
          {
            name: 'Create Student',
            path: 'create-student',
            element: <CreateStudent />,
          },
          {
            name: 'Students',
            path: 'students-data',
            element: <StudentData />,
          },
          {
            path: 'student-data/:studentId',
            element: <StudentDetails />,
          },
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
        ],
    },
];

export default adminPaths
// export const adminSideBarRoutes = adminPaths.reduce((acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         })
//     }
//     if (item.children) {
//         acc.push({
//           key: item.name,
//           label: item.name,
//           children: item.children.map((child) => ({
//             key: child.name,
//             label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//           })),
//         });
//       }
//     return acc
// }, [])


// for admin routes
// export const adminRutes = adminPaths.reduce((acc: TadminRoutes[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }
//     if (item.children) {
//         item.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             })
//         })
//     }
//     return acc
// }, [])


//! Hard coded way

// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];