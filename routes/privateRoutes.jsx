import Spinner from "@/components/Spinner/Spinner";
import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "next/router";

const PrivateRoutes = ({ children }) => {
  const router = useRouter();
  const [user, isError, isLoading,loading] = useGetUser();

  if (isLoading || loading) {
    return <Spinner />;
  }



  if (!isError) {
    router.push('/auth/login'); 
  }

  if (user?.username) {
    router.push('/auth/login'); 
  }

  return children;
};

export default PrivateRoutes;
