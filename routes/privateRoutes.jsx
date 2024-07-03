import Spinner from "@/components/Spinner/Spinner";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const router = useRouter();
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const user = useSelector((state) => state.user);
  if (user?.isLoading||!user?.email) {
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
