import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicFaculty = () => {
    const onsubmit: SubmitHandler<FieldValues> = (data) =>{
        console.log(data);
    }

    const academicSemesterSchema = z.object({
        facultyName: z.string({required_error: "Please Enter Faculty Name."})
    })
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
            <h1 style={{fontSize: "20px", fontWeight: "normal", marginBottom: "16px"}}>Create Academic Faculty</h1>
                <PHForm onSubmit={onsubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHInput name="facultyName" label="Faculty Name" type="text"/>

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;