import Layout from "@/Layout/Layout";
import Hero from "@/components/Home/Hero/Hero";
import RandomStories from "@/components/Home/Offers/RandomStories";
import Stories from "@/components/Home/Stories/Stories";
import Pricing from "@/components/Sections/Pricing/Pricing";


export default function Home() {
  
  return (
    <Layout title={'Home'}>
     <div className="flex flex-col space-y-6 mt-12">
     <Hero />
      <Stories />
      <Stories />
            <Pricing />
            <RandomStories />
            <Stories />
            </div>
     
    </Layout>
  );
}
