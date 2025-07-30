import Faq from "@/components/lander/home/faq";
import HeroSection from "@/components/lander/home/hero-section";

export default function Home() {
  return (
    <div className="space-y-15">
      <HeroSection />
      <Faq />
    </div>
  );
}
