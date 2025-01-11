import OfferedCourse from "../pages/Atudent/OfferedCourse";
import StudentDashboard from "../pages/Atudent/StudentDashboard";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />,
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourse />,
    }
] 