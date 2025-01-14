import { baseApi } from "../../Api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({
                url: '/academic-semesters',
                method: 'GET',
            }),
        }),
        academicSemester: builder.mutation({
            query: (data) => ({
                url: `/academic-semesters/create-academic-semester`,
                method: 'POST',
                body: data,
            })
        })
    }),
})

export const { useGetAllSemestersQuery, useAcademicSemesterMutation } = academicSemesterApi