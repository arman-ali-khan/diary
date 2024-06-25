import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = typeof window !== 'undefined' && localStorage.getItem('token')

const baseApi= createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/api'}),
    endpoints:(build) => ({
        getUsers:build.query({
            query:'https://jsonplaceholder.typicode.com/photos'
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