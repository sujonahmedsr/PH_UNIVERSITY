/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFromProps = {
    onSubmit: SubmitHandler<FieldValues>,
    children: ReactNode,
    resolver?: any
}

type TFromConfig = {
    resolver?: any
}

const PHForm = ({ onSubmit, children, resolver }: TFromProps) => {
    const formConfig: TFromConfig = {}
    if(resolver){
        formConfig['resolver'] = resolver
    }
    const methods = useForm(formConfig)
    return (
        <FormProvider {...methods}>
            <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
        </FormProvider>
    );
};

export default PHForm;