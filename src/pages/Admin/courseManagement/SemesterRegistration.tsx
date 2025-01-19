/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constance/semester";
import { toast } from "sonner";
import { TResponse } from "../../../types/globalTypes";

const SemesterRegistration = () => {
    const { data: allAcademicSemester } = useGetAllSemestersQuery([
        { name: 'sort', value: 'year' }
    ])

    const academicSemesterOptions = allAcademicSemester?.data?.map(item => ({
        value: item?._id,
        label: `${item?.name} ${item?.year}`
    }))

    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        const toastId = toast.loading('Creating...');

        const semesterData = {
            ...data,
            minCredit: Number(data.minCredit),
            maxCredit: Number(data.maxCredit),
        };

        console.log(semesterData);

        try {
            const res = (await addSemester(semesterData)) as TResponse<any>;
            console.log(res);
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success('Semester created', { id: toastId });
            }
        } catch (err) {
            toast.error('Something went wrong', { id: toastId });
        }
    }
    return (
        <Flex justify="center">
            <Col span={7}>
                <PHForm onSubmit={onsubmit}>
                    <PHSelect
                        label="Academic Semester"
                        name="academicSemester"
                        options={academicSemesterOptions}
                    />

                    <PHSelect
                        name="status"
                        label="Status"
                        options={semesterStatusOptions}
                    />
                    <PHDatePicker name="startDate" label="Start Date" />
                    <PHDatePicker name="endDate" label="End Date" />
                    <PHInput type="text" name="minCredit" label="Min Credit" />
                    <PHInput type="text" name="maxCredit" label="Max Credit" />

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default SemesterRegistration;