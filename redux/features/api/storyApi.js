import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = typeof window !== 'undefined' && localStorage.getItem('token')

const storyApi= createApi({
    reducerPath:'story',
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_API}),
    endpoints:(builder) => ({
        getStoriesByEmailCategoryTag:builder.query({
            query:({email,category,tag})=> `/stories?email=${email}&category=${category}&tag=${tag}`,
        }),
        getStories:builder.query({
            query:()=> `/stories`,
        }),
        getStoryById:builder.query({
            query:(query)=> `/stories/${query}`,
        }),
        // get story part
        getStoryPartById:builder.query({
            query:({storyId,partId})=> `/stories/part/${storyId}?partId=${partId}`,
        }),
        createPartStory:builder.mutation({
            query:(part)=>({
                url:`/stories/part`,
                headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`},
                method:`POST`,
                body:part
            })
        }),
        updatePartById:builder.mutation({
            query:({part,id})=>({
                url:`/stories/part/${id}`,
                headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`},
                method:`PUT`,
                body:part
            })
        }),
        createStory:builder.mutation({
            query:(story)=>({
                url:`/stories`,
                headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`},
                method:`PUT`,
                body:story
            })
        }),
    }),
})

export const {useCreateStoryMutation,useCreatePartStoryMutation,useGetStoryByIdQuery,useGetStoriesQuery,useGetStoryPartByIdQuery,useUpdatePartByIdMutation,useGetStoriesByEmailCategoryTagQuery}=storyApi
export default storyApi