import { setUser } from "@/redux/features/usersSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetUser = () => {
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const user =''
  const [isSuccess,setIsSuccess] = useState(false)
  const dispatch = useDispatch()

  const token = typeof window !== 'undefined' && localStorage.getItem('token')

    useEffect(()=>{
      dispatch(setUser({isLoading:true}))
      fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/token`,{
        method: 'POST',
          headers: {'Content-Type':'application/json',Authorization:`Bearer ${token}`}
        })
        .then(res=> res.json())
        .then(data => {
          if(data?.email){
            dispatch(setUser(data))
            dispatch(setUser({...data,error:data?.error}))
            dispatch(setUser({...data,isSuccess:true}))
          }
          dispatch(setUser({...data,isLoading:false}))
        }).catch(err=>{
          console.error(err);
          dispatch(setUser({...data,isLoading:false}))
          dispatch(setUser({...data,isSuccess:false}))
        })
    },[token])

  return [user, error, loading, isSuccess];
};

export default useGetUser;
