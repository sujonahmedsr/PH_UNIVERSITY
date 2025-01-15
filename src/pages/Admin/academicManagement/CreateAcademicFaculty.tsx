/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAddAcadmicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../types/globalTypes";

type TAcademicFaculty = {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const CreateAcademicFaculty = () => {
    const [addAcadmicFaculty] = useAddAcadmicFacultyMutation()
    const navigate = useNavigate()
    const onsubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...');

        const facultyCreate = {
            name: data?.facultyName
        }

        try {
            const res = (await addAcadmicFaculty(facultyCreate)) as TResponse<TAcademicFaculty>
            console.log(res);
            
            if (res.error) {
                toast.error(res?.error?.data?.message, { id: toastId });
            } else {
                navigate(`/admin/academic-faculty`)
                toast.success('Faculty created', { id: toastId });
            }
        } catch (err) {
            toast.error('Something went wrong', { id: toastId });
        }
    }

    const academicSemesterSchema = z.object({
        facultyName: z.string({ required_error: "Please Enter Faculty Name." })
    })
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <h1 style={{ fontSize: "20px", fontWeight: "normal", marginBottom: "16px" }}>Create Academic Faculty</h1>
                <PHForm onSubmit={onsubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHInput name="facultyName" label="Faculty Name" type="text" />

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;