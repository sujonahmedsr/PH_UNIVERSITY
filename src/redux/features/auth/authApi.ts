import { baseApi } from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: "POST",
                body: userInfo
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: "POST",
            })
        })
    })
})
export const {useLoginMutation, useLogoutMutation} = authApi