
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import FeaturedRoomsSlider from "@/components/FeaturedRoomsSlider/FeaturedRoomsSlider";


const Home = () => {
 
  return (
    <>
      <HeroSection />
      <PageSearch />
    <FeaturedRoomsSlider/>
      <Gallery />
     <NewsLetter />
    </>
  )
}
export default Home;
