import BottomBar from "@/components/shared/Bottombar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

function Layout({children}) {
    return (
        <div className="container mx-auto">
         <Navbar />
            {children}
            <Footer />
            <BottomBar />
        </div>
    );
}

export default Layout;