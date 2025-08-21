import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import GovernmentSection from "@/components/GovernmentSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DispatchIQ - AI-Powered Dispatch System",
    "description": "Revolutionize property management with DispatchIQ's AI-driven dispatch system. Increase profitability by 85% through intelligent technician matching and automated workflow management.",
    "url": "https://dispatchiq.app",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "DispatchIQ",
      "description": "AI-powered dispatch system for property management and subcontractor management",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "DispatchIQ",
        "url": "https://dispatchiq.app"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI-Powered Dispatch System for Property Management"
        description="Revolutionize property management with DispatchIQ's AI-driven dispatch system. Increase profitability by 85% through intelligent technician matching and automated workflow management. Join the future of maintenance automation."
        keywords="DispatchIQ, dispatchiq, AI dispatch system, property management software, automated dispatch, subcontractor management, maintenance automation, intelligent routing, property maintenance software, AI-powered dispatch, workforce management, dispatch automation"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <GovernmentSection />
        <ComingSoonSection />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
