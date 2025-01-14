/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onSubmit = async (data: FieldValues) => {
    const loading = toast.loading('loggin in')

    if (data.userId == undefined || data.password == undefined) {
      toast.error('Some this went wrong', { id: loading })
    }

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap()
      const user = verifyToken(res.data.accessToken) as TUser
      toast.success("Logged in succesfully", { id: loading })
      dispatch(setUser({ user: user, token: res.data.accessToken }))
      navigate(`/${user.role}/dashboard`)
    } catch (err) {
      toast.error('Some this went wrong', { id: loading })
    }

  }
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="userId" label="ID: " />
        <PHInput type="text" name="password" label="Password: " />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>

  );
};

export default Login;