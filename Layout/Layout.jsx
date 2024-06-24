import BottomBar from "@/components/shared/Bottombar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useRouter } from "next/router";

function Layout({children}) {
    const router = useRouter()
    return (
        <div className="container mx-auto">
         <Navbar />
            {children}
            <BottomBar />
            {
                router?.asPath?.split('/').slice(1,2).join('')==='story' ? '':<Footer />
            }
            
        </div>
    );
}

export default Layout;