import { TAcademicSemester } from "../pages/Admin/academicManagement/AcademicSemester";

export type TSemester = {
    _id: string;
    academicSemester: TAcademicSemester;
    status: string;
    startDate: string;
    endDate: string;
    minCredit: number;
    maxCredit: number;
    createdAt: string;
    updatedAt: string;
  };