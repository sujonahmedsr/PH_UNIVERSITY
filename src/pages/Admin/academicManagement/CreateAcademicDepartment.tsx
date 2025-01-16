/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { TAcademicFaculty } from "./CreateAcademicFaculty";
import { useAddAcadmicDepartmentMutation, useAddAcadmicFacultyMutation, useGetAllAcadmicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import PHSelect from "../../../components/form/PHSelect";

export type TAcademicDepartment = {
    _id: string;
    name: string;
    academicFaculty: TAcademicFaculty;
    createdAt: string;
    updatedAt: string;
};

const CreateAcademicDepartment = () => {
    const [addAcadmicFaculty] = useAddAcadmicDepartmentMutation()
    const { data: sData, isLoading: sIsLoading } =
        useGetAllAcadmicFacultyQuery(undefined);

    const academicFacultyOptions = sData?.data?.map((item: any) => ({
        value: item._id,
        label: `${item.name}`,
    }));
    const navigate = useNavigate()
    const onsubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...');

        const facultyCreate = {
            name: data?.departmentName,
            academicFaculty: data?.academicFaculty
        }

        try {
            const res = await addAcadmicFaculty(facultyCreate)
            console.log(res);

            if (res.error) {
                toast.error('Something went wrong', { id: toastId });
            } else {
                navigate(`/admin/academic-department`)
                toast.success('Department created', { id: toastId });
            }
        } catch (err) {
            toast.error('Something went wrong', { id: toastId });
        }
    }

    const academicSemesterSchema = z.object({
        departmentName: z.string({ required_error: "Please Enter Department Name." }),
        academicFaculty: z.string({ required_error: "Please Enter Faculty Name." })
    })
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <h1 style={{ fontSize: "20px", fontWeight: "normal", marginBottom: "16px" }}>Create Academic Department</h1>
                <PHForm onSubmit={onsubmit} resolver={zodResolver(academicSemesterSchema)}>

                    <PHInput name="departmentName" label="Department Name" type="text" />
                    <PHSelect name="academicFaculty" label="Academic Faculty" options={academicFacultyOptions} />

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicDepartment;