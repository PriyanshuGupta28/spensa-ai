import Faq from "@/components/lander/home/faq";
import HeroSection from "@/components/lander/home/hero-section";
import TestimonialSection from "@/components/lander/home/testimonials";

export default function Home() {
  return (
    <div className="space-y-15">
      <HeroSection />
      <TestimonialSection />
      <Faq />
    </div>
  );
}
