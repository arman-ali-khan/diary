import Hero from "@/components/Home/Hero/Hero";
import Stories from "@/components/Home/Stories/Stories";
import Bottombar from "@/components/shared/Bottombar";
import Navbar from "@/components/shared/Navbar";
import { useDispatch } from 'react-redux';


export default function Home() {
    // redux
    const dispatch = useDispatch()
    // const [user] = useGetUser()
    
    // useEffect(()=>{
    //   dispatch(setUser(user))
    // },[])
  return (
    <main>
       <Navbar />
      <Hero />
      <Stories />
      <Stories />
      <Bottombar />
    </main>
  );
}
