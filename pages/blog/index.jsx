import Layout from "@/Layout/Layout"
import Blogs from "@/components/Blog/Blogs"

const blog = () =>{
    return <Layout title={'Blog'}>
    <div>
       <Blogs />
    </div>  
</Layout>
}

export default blog