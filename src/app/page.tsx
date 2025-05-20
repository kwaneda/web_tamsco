import HeroBanner from "@/components/sections/HeroBanner";
import About from "@/components/sections/About";
import Business from "@/components/sections/Business";
import Cases from "@/components/sections/Cases";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <About />
      <Business />
      <Cases />
      <Contact />
      <Footer />
    </main>
  );
}
