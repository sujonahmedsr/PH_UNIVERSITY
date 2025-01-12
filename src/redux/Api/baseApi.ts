import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const toekn = (getState() as RootState).auth.token
        if (toekn) {
            headers.set("authorization", `${toekn}`)
        }
        return headers
    }
})

const baseQueryWithRefreshToken = async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption)

    if (result?.error?.status === 401) {
        console.log('Sending refresh token');
        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: "POST",
            credentials: "include"
        })
        const data = await res.json()

        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken,
                })
            );

        }
        result = await baseQuery(args, api, extraOption);
    }

    return result
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})