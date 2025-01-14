import { TAcademicSemester } from "../../../pages/Admin/academicManagement/AcademicSemester";
import { TResponseRedux } from "../../../types/globalTypes";
import { baseApi } from "../../Api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({
                url: '/academic-semesters',
                method: 'GET',
            }),
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                  data: response.data,
                  meta: response.meta,
                };
              },
        }),
        addAcademicSemester: builder.mutation({
            query: (data) => ({
                url: `/academic-semesters/create-academic-semester`,
                method: 'POST',
                body: data,
            })
        })
    }),
})

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } = academicSemesterApi