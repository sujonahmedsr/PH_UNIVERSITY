import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const {register, handleSubmit} = useForm()
    const [login] = useLoginMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
      const loading = toast.loading('loggin in')
        try {
          const userInfo = {
            id: data.id,
            password: data.password,
          };

        const res = await login(userInfo).unwrap()
        const user = verifyToken(res.data.accessToken)
        toast.success("Logged in succesfully", {id: loading, duration: 2000})
        dispatch(setUser({ user: user, token: res.data.accessToken }))
        navigate(`/${user.role}/dashboard`)
        } catch (error) {
          toast.error('Some this went wrong', {id: loading, duration: 2000})
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
    );
};

export default Login;