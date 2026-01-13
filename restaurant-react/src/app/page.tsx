import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import BookingForm from "@/components/sections/BookingForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Menu />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
