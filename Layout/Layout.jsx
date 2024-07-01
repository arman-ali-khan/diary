import BottomBar from "@/components/shared/Bottombar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";

function Layout({children,title,description,keywords,author,image,thumb,date,notification}) {
    const router = useRouter()
    return (
        <div className="container mx-auto">
            <Head>
                <title>{title}</title>
            </Head>
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