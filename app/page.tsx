import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Generate from "@/components/Generate";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <Generate />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}