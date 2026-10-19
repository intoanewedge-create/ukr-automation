import Navbar         from "@/components/Navbar";
import Hero           from "@/components/Hero";
import Problems       from "@/components/Problems";
import Services       from "@/components/Services";
import HowItWorks     from "@/components/HowItWorks";
import BeforeAfter    from "@/components/BeforeAfter";
import WhyChooseUs    from "@/components/WhyChooseUs";
import Integrations   from "@/components/Integrations";
import ConsultationCTA from "@/components/ConsultationCTA";
import ContactForm    from "@/components/ContactForm";
import FAQ            from "@/components/FAQ";
import Footer         from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problems />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <BeforeAfter />
        <Integrations />
        <ConsultationCTA />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

