import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import OfferedCourse from "../pages/Faculty/OfferedCourse";

export const facultyPaths = [
    {
      name: 'Faculty Dashboard',
      path: 'dashboard',
      element: <FacultyDashboard />,
    },
    {
      name: 'Offered Course',
      path: 'offered-course',
      element: <OfferedCourse />,
    },
  ];