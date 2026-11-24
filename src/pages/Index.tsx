import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Booking from "@/components/Booking";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      <Solutions />
      <About />
      <CTA />
      <Booking />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
