import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Stylists from "@/components/sections/Stylists";
import Gallery from "@/components/sections/Gallery";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Stylists />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
