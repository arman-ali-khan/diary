import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = typeof window !== 'undefined' && localStorage.getItem('token')

const storyApi= createApi({
    reducerPath:'story',
    baseQuery: fetchBaseQuery({baseUrl:'/'}),
    endpoints:(builder) => ({
        getStory:builder.query({
            query:(query)=> '/jsons/fake-story.json',
        }),
        getStories:builder.query({
            query:()=> `${process.env.NEXT_PUBLIC_BASE_API}/stories`,
        }),
        getStoryById:builder.query({
            query:(query)=> `${process.env.NEXT_PUBLIC_BASE_API}/stories/${query}`,
        }),
        // get story part
        getStoryPartById:builder.query({
            query:({storyId,partId})=> `${process.env.NEXT_PUBLIC_BASE_API}/stories/part/${storyId}?partId=${partId}`,
        }),
        createPartStory:builder.mutation({
            query:(part)=>({
                url:`${process.env.NEXT_PUBLIC_BASE_API}/stories/part`,
                headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`},
                method:`POST`,
                body:part
            })
        }),
        updatePartById:builder.mutation({
            query:({part,id})=>({
                url:`${process.env.NEXT_PUBLIC_BASE_API}/stories/part/${id}`,
                headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`},
                method:`PUT`,
                body:part
            })
        }),
        createStory:builder.mutation({
            query:(story)=>({
                url:`${process.env.NEXT_PUBLIC_BASE_API}/stories`,
                headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`},
                method:`PUT`,
                body:story
            })
        }),
    }),
})

export const {useGetStoryQuery,useCreateStoryMutation,useCreatePartStoryMutation,useGetStoryByIdQuery,useGetStoriesQuery,useGetStoryPartByIdQuery,useUpdatePartByIdMutation}=storyApi
export default storyApi