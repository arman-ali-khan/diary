import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = typeof window !== 'undefined' && localStorage.getItem('token')

const storyApi= createApi({
    reducerPath:'story',
    baseQuery: fetchBaseQuery({baseUrl:'/'}),
    endpoints:(builder) => ({
        getStory:builder.query({
            query:(query)=> '/jsons/fake-story.json',
        }),
    }),
})

export const {useGetStoryQuery}=storyApi
export default storyApi