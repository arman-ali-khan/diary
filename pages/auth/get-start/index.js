import Layout from "@/Layout/Layout";
import { useCreateUserMutation } from "@/redux/features/api/baseApi";
import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { BsCheck } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // redux
  const [createUser, { isError, isLoading, isSuccess, data: result }] =
    useCreateUserMutation();
  const handleCreateUser = async (data) => {
    const user = {
      email: data?.email,
      username: data?.name,
      password: data?.password,
      fullName: data?.fullName,
    };
    await createUser(user).then(res=>{
      localStorage.setItem("token", res?.data?.token);
    })
  };

  return (
   <Layout title={'Register'}>
     <div className="w-full h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(handleCreateUser)} className="">
        <div className="flex flex-col gap-3">
          <input
            autocomplete="off"
            {...register("fullName", { required: true })}
            id="fullName"
            placeholder="Full Name"
            className="input rounded-full input-bordered md:w-96 z-30 input-sm"
            type="text"
          />
      
          {/* email */}
        <input
            {...register("email", { required: true })}
            id="email"
            placeholder="Email"
            className="input rounded-full input-bordered md:w-96 z-30 input-sm"
            type="email"
            autoComplete="off"
          />
         
       
        <div className="relative flex items-center">
        {/* Username */}
          <input
            {...register("name", { required: true })}
            id="name"
            placeholder="username"
            className="input rounded-full input-bordered md:w-96 z-30 input-sm"
            type="text"
            autoComplete="false"
          /> <span className="bg-green-500 rounded-full w-5 z-50 h-5 absolute right-2 flex items-center justify-center"><BsCheck color="white" /></span>
           </div>
          <div className="relative flex items-center">
            <input
              autocomplete="off"
              {...register("password", { required: true })}
              placeholder="Password"
              className="input rounded-full input-bordered md:w-96 z-30 input-sm"
              type={showPassword ? "text" : "password"}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="px-2 z-40 absolute right-3"
            >
              {!showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
          </div>
          <div className="flex items-center gap-2">
            Already have an account ?{" "}
            <Link
              className="hover:underline duration-300 text-blue-500 hover:text-blue-600"
              href={"/auth/login"}
            >
              Login Now
            </Link>
          </div>
          <button className="bg-gradient duration-300 text-white px-4 py-2 gap-3 rounded-full flex items-center justify-center">
            {isLoading ? (
              <span className="animate-spin">
                <CgSpinner />
              </span>
            ) : (
              ""
            )}
            {isSuccess ? "Account created" : "Register"}
          </button>
        </div>
      </form>
    </div>
   </Layout>
  );
};

export default index;
