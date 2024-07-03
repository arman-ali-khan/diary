import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = typeof window !== 'undefined' && localStorage.getItem('token')
const baseApi= createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_API}),
    endpoints:(build) => ({
        getUsers:build.query({
            query:'/users'
        }),
        // getUserByEmail:build.query({

        // }),
        createUser:build.mutation({
            query:(user)=>({
                url:`/users`,
                method:`POST`,
                body:user
            })
        }),
        loginUser:build.mutation({
            query:(user)=>({
                url:`/users/login`,
                method:'POST',
                body:user
            })
        }),
        getUserByToken:build.mutation({
            query:()=>({
                url:'/users/token',
                method:'POST',
                body:'',
                headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`}
            })
        })
    }),
})

export const {useGetUsersQuery,useCreateUserMutation,useLoginUserMutation,useGetUserByTokenMutation}=baseApi
export default baseApi