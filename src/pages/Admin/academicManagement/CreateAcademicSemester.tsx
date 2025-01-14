import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
        <PHForm onSubmit={onsubmit}>
            <PHInput name="name" type="text" label="name"/>
            <Button htmlType="submit">Submit</Button>
        </PHForm>
    );
};

export default CreateAcademicSemester;