import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = typeof window !== 'undefined' && localStorage.getItem('token')

const storyApi= createApi({
    reducerPath:'story',
    baseQuery: fetchBaseQuery({baseUrl:'/'}),
    endpoints:(builder) => ({
        getStory:builder.query({
            query:(query)=> '/jsons/fake-story.json',
        }),
        getStoryById:builder.query({
            query:(query)=> `${process.env.NEXT_PUBLIC_BASE_API}/stories/${query}`,
        }),
        createPartStory:builder.mutation({
            query:(part)=>({
                url:`${process.env.NEXT_PUBLIC_BASE_API}/stories/part`,
                method:`POST`,
                body:part
            })
        }),
        createStory:builder.mutation({
            query:(story)=>({
                url:`${process.env.NEXT_PUBLIC_BASE_API}/stories`,
                method:`PUT`,
                body:story
            })
        }),
    }),
})

export const {useGetStoryQuery,useCreateStoryMutation,useCreatePartStoryMutation,useGetStoryByIdQuery}=storyApi
export default storyApi