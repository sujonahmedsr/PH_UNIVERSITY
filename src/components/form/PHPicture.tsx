import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPHPicture = {
    label: string,
    name: string,
}

const PHPicture = ({ label, name }: TPHPicture) => {
    return (
        <div>
            <Controller
                name={name}
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label={label}>
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
        </div>

    );
};

export default PHPicture;