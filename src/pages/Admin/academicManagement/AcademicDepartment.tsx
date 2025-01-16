import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicDepartment } from "./CreateAcademicDepartment";

const AcademicDepartment = () => {
    const {data: academicFaculty} = useGetAcademicDepartmentsQuery(undefined)
        
        return (
            <div>
                Academic Faculty
                <div>
                    {
                      academicFaculty?.data?.map((item:TAcademicDepartment, index: number) => <p key={index}>{index + 1} : {item?.name}</p>) 
                    }
                </div>
            </div>
        );
};

export default AcademicDepartment;