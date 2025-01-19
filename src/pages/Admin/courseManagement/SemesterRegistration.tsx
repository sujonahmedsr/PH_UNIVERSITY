import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";

const SemesterRegistration = () => {
    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
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