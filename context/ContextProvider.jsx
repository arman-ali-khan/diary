import useGetUser from "@/hooks/useGetUser";
import { createContext } from "react";
import { useDispatch } from 'react-redux';

export const AuthContext = createContext();

function ContextProvider({ children }) {
  // redux
  const dispatch = useDispatch();
  const [user,isError,isLoading,isSuccess] = useGetUser();

  // useEffect(() => {
  //   dispatch(setUser(user));
  // }, [isLoading]);

  const info = { user };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
}

export default ContextProvider;
