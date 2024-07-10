import Hero from "@/Components/Hero";
import  Imgcards  from "@/Components/Imgcarda";
import Carousel1 from "@/Components/Carousel1";
import Features from "@/Components/Features";
import Access from "@/Components/Access"
import Faqs from "@/Components/Faqs";
import Footer from "@/Components/Footer"
export default function Home() {
  return (
    <div>
        <div>
            
            <Carousel1/>
            {/* <Hero/> */}
            <Access/>
            <Imgcards/>
            <Features/>
            <Faqs/>
            <Footer/>
        </div>
    </div>
  );
}
