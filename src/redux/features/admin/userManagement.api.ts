import { TStudent } from "../../../type/userManagement.type";
import { TResponseRedux } from "../../../types/globalTypes";
import { baseApi } from "../../Api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllStudent: builder.query({
            query: () => {
                return {
                    url: '/students',
                    method: "GET"
                }
            },
            transformResponse: (Response: TResponseRedux<TStudent>) => {
                return {
                    data: Response.data,
                    meta: Response.meta,
                }
            }
        }),
        addStudent: builder.mutation({
            query: (data) => ({
                url: `/users/create-student`,
                method: 'POST',
                body: data,
            })
        }),
    })
})

export const { useAddStudentMutation, useGetAllStudentQuery } = userManagementApi