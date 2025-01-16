/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFromProps = {
    onSubmit: SubmitHandler<FieldValues>,
    children: ReactNode,
    resolver?: any,
    defaultValues?: Record<string, any>;
    
}

type TFromConfig = {
    resolver?: any,
    defaultValues?: Record<string, any>;
}

const PHForm = ({ onSubmit, children, resolver, defaultValues }: TFromProps) => {
    const formConfig: TFromConfig = {}
    if(defaultValues){
        formConfig['defaultValues'] = defaultValues
    }
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