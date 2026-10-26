import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AutomationSolutions from "@/components/AutomationSolutions";
import UgcPortfolio from "@/components/UgcPortfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ConsultationCTA from "@/components/ConsultationCTA";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <AutomationSolutions />
        <UgcPortfolio />
        <WhyChooseUs />
        <HowItWorks />
        <ConsultationCTA />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
