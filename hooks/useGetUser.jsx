import { useGetUserByTokenMutation } from "@/redux/features/api/baseApi"
import { useEffect, useState } from "react"


const useGetUser = () =>{
    const [user,setUser] = useState()
    const [getUserByToken,{isError,isLoading,isSuccess}] = useGetUserByTokenMutation()
    const handleGetUser = () =>{
          getUserByToken().then(res=>{
            setUser(res?.data);
     })
    }
   useEffect(()=>{
    handleGetUser()
   },[])
    
     return  [user]
    
}

export default useGetUser