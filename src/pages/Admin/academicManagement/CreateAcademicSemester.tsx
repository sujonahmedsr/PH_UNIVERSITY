/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions, semesterOptions, yearOptions } from "../../../constance/academicSemester";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/globalTypes";
import { TAcademicSemester } from "./AcademicSemester";
import { useNavigate } from "react-router-dom";



const CreateAcademicSemester = () => {
    const [addAcademicSemester] = useAddAcademicSemesterMutation()
    const navigate = useNavigate()
    const onsubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...');

        const name = semesterOptions[Number(data?.name) - 1]
        const semesterData = {
            name: name?.label,
            code: name?.value,
            year: data?.year,
            startMonth: data?.startMonth,
            endMonth: data?.endMonth
        }

        try {
            const res = (await addAcademicSemester(semesterData)) as TResponse<TAcademicSemester>

            if (res.error) {
                toast.error(res?.error?.data?.message, { id: toastId });
            } else {
                navigate(`/admin/academic-semester`)
                toast.success('Semester created', { id: toastId });
            }

        } catch (err) {
            toast.error('Something went wrong', { id: toastId });
        }
    }

    const academicSemesterSchema = z.object({
        name: z.string({ required_error: 'Please select a Name' }),
        year: z.string({ required_error: 'Please select a Year' }),
        startMonth: z.string({ required_error: 'Please select a Start Month' }),
        endMonth: z.string({ required_error: 'Please select a End Month' }),
    })
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
            <h1 style={{fontSize: "20px", fontWeight: "normal", marginBottom: "16px"}}>Create Academic Semester</h1>
                <PHForm onSubmit={onsubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHSelect name="name" label="Name" options={semesterOptions} />
                    <PHSelect name="year" label="Year" options={yearOptions} />
                    <PHSelect name="startMonth" label="Start Month" options={monthOptions} />
                    <PHSelect name="endMonth" label="End Month" options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;