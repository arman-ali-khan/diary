import { useGetUserByTokenMutation } from "@/redux/features/api/baseApi";
import { useEffect, useState } from "react";

const useGetUser = () => {
  const [user, setUser] = useState();
  const [loading,setLoading] = useState(true)
  const [getUserByToken, { isError, isLoading, isSuccess }] = useGetUserByTokenMutation();

  const handleGetUser = async () => {
    setLoading(true)
    try {
      const res = await getUserByToken();
      setUser(res?.data);
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return [user, isError, isLoading,loading, isSuccess];
};

export default useGetUser;
