import { useGetAllAcadmicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicFaculty } from "./CreateAcademicFaculty";

const AcademicFaculty = () => {
    const {data: academicFaculty} = useGetAllAcadmicFacultyQuery(undefined)
    
    return (
        <div>
            Academic Faculty
            <div>
                {
                  academicFaculty?.data?.map((item:TAcademicFaculty, index: number) => <p key={index}>{index + 1} : {item?.name}</p>) 
                }
            </div>
        </div>
    );
};

export default AcademicFaculty;