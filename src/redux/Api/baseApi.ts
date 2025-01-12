import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseApiQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const toekn = (getState() as RootState).auth.token
        if(toekn){
            headers.set("authorization", `${toekn}`)
        }
        return headers
    }
})

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseApiQuery,
    endpoints: () => ({})
})