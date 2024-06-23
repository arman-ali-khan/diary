import Layout from "@/Layout/Layout";
import Hero from "@/components/Home/Hero/Hero";
import RandomStories from "@/components/Home/Offers/RandomStories";
import Stories from "@/components/Home/Stories/Stories";


export default function Home() {
  
  return (
    <Layout>
     <div className="flex flex-col space-y-6 mt-12">
     <Hero />
      <Stories />
      <Stories />
            <RandomStories />
            <Stories />
            </div>
     
    </Layout>
  );
}
