import { TQueryParam } from "../../../type/allTypes";
import { TStudent } from "../../../type/userManagement.type";
import { TResponseRedux } from "../../../types/globalTypes";
import { baseApi } from "../../Api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllStudent: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                      params.append(item.name, item.value as string);
                    });
                  }

                  console.log(params, args);
                  
                
                return {
                    url: '/students',
                    method: "GET",
                    params: params
                }
            },
            transformResponse: (Response: TResponseRedux<TStudent[]>) => {
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