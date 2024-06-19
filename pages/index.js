import Hero from "@/components/Home/Hero/Hero";
import Stories from "@/components/Home/Stories/Stories";
import Bottombar from "@/components/shared/Bottombar";
import Navbar from "@/components/shared/Navbar";



export default function Home() {
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
