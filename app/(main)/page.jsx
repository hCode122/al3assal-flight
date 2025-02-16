import Image from "next/image";
import Hero from "../components/Landing/Hero/Hero";
import MobileHero from "../components/Landing/MobileHero/MobileHero";
import ResultSection from "../components/Landing/ResultSection/ResultSection";
import TrustedBy from "../components/Landing/TrustedBy/TrustedBy";
import ContactUs from "../components/Landing/ContactUs/ContactUs";
export default function Home() {
  return (
    
    <div className="flex flex-col gap-20">
        <Hero />
        <MobileHero />
        <ResultSection />
        <TrustedBy />
        <ContactUs />
    </div>
      
  );
}
