import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import Schedule from "@/components/sections/Schedule";
import Coaches from "@/components/sections/Coaches";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Schedule />
        <Coaches />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
