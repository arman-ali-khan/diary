import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export default usersApi= createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/posts'}),
    endpoints:() => ({}),
})