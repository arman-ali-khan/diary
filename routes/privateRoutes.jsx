import Spinner from "@/components/Spinner/Spinner";
import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "next/router";

const PrivateRoutes = ({ children }) => {
  const router = useRouter();
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const [user, error, loading, isSuccess] = useGetUser();
  if (loading) {
    return <Spinner />;
  }

  if (!token) {
     router.push("/auth/login");
  }

  if (!token || !user?.username) {
     router.push("/auth/login");
  }
  return children;
};

export default PrivateRoutes;
