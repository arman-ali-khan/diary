import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = typeof window !== 'undefined' && localStorage.getItem('token')

const storyApi= createApi({
    reducerPath:'story',
    baseQuery: fetchBaseQuery({baseUrl:'/'}),
    endpoints:(builder) => ({
        getStory:builder.query({
            query:(query)=> '/jsons/fake-story.json',
        }),
        createStory:builder.mutation({
            query:(part)=>({
                url:`${process.env.NEXT_PUBLIC_BASE_API}/api/story/part`,
                method:`POST`,
                body:part
            })
        }),
    }),
})

export const {useGetStoryQuery,useCreateStoryMutation}=storyApi
export default storyApi