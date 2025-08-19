import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import GovernmentSection from "@/components/GovernmentSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <GovernmentSection />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
