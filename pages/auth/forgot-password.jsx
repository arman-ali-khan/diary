import Layout from "@/Layout/Layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleForgot = (data) => {
   toast.success('Email sent')
  };

  const [loading, setLoading] = useState(false);
  return (
    <Layout title={"Forgot Password"}>
      <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(handleForgot)}>
          <h2 className="px-4 py-2 my-6 border-b text-white  text-2xl font-bold">
            Forgot Password
          </h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter your email</label>
            <input
              placeholder="example@email.com"
              {...register("email", { required: true })}
              className="input rounded-full input-bordered md:w-96 z-30 input-sm"
              type="email"
            />
            <button className="bg-gradient duration-300 text-white px-4 py-2 gap-3 rounded-full flex items-center justify-center">
              {loading ? (
                <span className="animate-spin">
                  <CgSpinner />
                </span>
              ) : (
                ""
              )}
              Send recover code
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
