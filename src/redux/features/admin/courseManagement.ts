import { TQueryParam } from "../../../type/allTypes";
import { TSemester } from "../../../type/courseManagement.type";
import { TResponseRedux } from "../../../types/globalTypes";
import { baseApi } from "../../Api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRegisteredSemesters: builder.query({
            query: (args) => {
              const params = new URLSearchParams();
      
              if (args) {
                args.forEach((item: TQueryParam) => {
                  params.append(item.name, item.value as string);
                });
              }
      
              return {
                url: '/semester-registrations',
                method: 'GET',
                params: params,
              };
            },
            transformResponse: (response: TResponseRedux<TSemester[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),
        addRegisteredSemester: builder.mutation({
            query: (data) => ({
                url: '/semester-registrations/create-semester-registration',
                method: 'POST',
                body: data,
            })
        }),
        updateRegisteredSemester: builder.mutation({
            query: (args) => ({
              url: `/semester-registrations/${args.id}`,
              method: 'PATCH',
              body: args.data,
            }),
          }),
    })
})


export const {
    useAddRegisteredSemesterMutation,
    useGetAllRegisteredSemestersQuery,
    useUpdateRegisteredSemesterMutation
} = courseManagementApi;