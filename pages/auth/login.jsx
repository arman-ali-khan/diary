import { useLoginUserMutation } from "@/redux/features/api/baseApi";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
const login =  () =>{
    const [loading,setLoading] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const [email,setEmail] = useState('')
    const router = useRouter()
    const [password,setPassword] = useState('')

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()


      const [loginUser,{isError,isLoading,isSuccess,data:result,error}] = useLoginUserMutation()
      const handleLogin = (data) =>{
      
          loginUser(data).then(res=>{
          localStorage.setItem("token", res?.data?.token);
          if(localStorage.getItem('token')){
            router.push('/')
          }
        })
      }

      // const [getUserByToken,{isError:isErrorUser,isLoading:isLoadingUser,isSuccess:isSuccessUser}] = useGetUserByTokenMutation()

     
    return <div className="w-screen h-screen flex justify-center items-center">
    <form onSubmit={handleSubmit(handleLogin)} className="">
        <div className="flex flex-col gap-3">
            <input {...register('email',{required:true})} className="input rounded-full input-bordered md:w-96 z-30 input-sm" type="email" />
            {/* <input className="input rounded-full input-bordered md:w-96 z-30 input-sm" type="phone" /> */}
            <div className="relative flex items-center">
            <input {...register('password',{required:true})} className="input rounded-full input-bordered md:w-96 z-30 input-sm" type={showPassword ? 'text':'password'} />
            <span onClick={()=>setShowPassword(!showPassword)} className="px-2 z-40 absolute right-3">{!showPassword ? <IoMdEye />:<IoMdEyeOff />}</span>
            </div>

            <div className="flex items-center gap-2">Don't have any account?<Link  className='hover:underline duration-300 text-blue-500 hover:text-blue-600' href="/auth/get-start">Register</Link></div>
            <button className="bg-gradient duration-300 text-white px-4 py-2 gap-3 rounded-full flex items-center justify-center">{isLoading ? <span className='animate-spin'><CgSpinner /></span>:''}{isSuccess?'Logged':isError?'Try again':'Login'}</button>
           <div className="flex items-center gap-3 "> {error?.data?.message}
            {isError ? <Link href='/auth/forgot-password' className="hover:underline duration-300 text-blue-500 hover:text-blue-600">Forgot Password?</Link>:""}</div>
        </div>
    </form>
    </div>
}

export default login