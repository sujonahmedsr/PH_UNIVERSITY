import { TAcademicSemester } from "../../../pages/Admin/academicManagement/AcademicSemester";
import { TQueryParam } from "../../../type/allTypes";
import { TResponseRedux } from "../../../types/globalTypes";
import { baseApi } from "../../Api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: (args) => {
                const params = new URLSearchParams()
                
                if(args){
                    args?.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    })
                }
                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params
                }

            },
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
        }),
        getAllAcadmicFaculty: builder.query({
            query: () => ({
                url: `/academic-faculties`,
                method: "GET"
            })
        }),
        addAcadmicFaculty: builder.mutation({
            query: (info) => ({
                url: `/academic-faculties/create-academic-faculty`,
                method: "POST",
                body: info
            })
        })
    }),
})

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation, useAddAcadmicFacultyMutation,  useGetAllAcadmicFacultyQuery} = academicSemesterApi