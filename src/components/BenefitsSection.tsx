import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const ecosystemPartners = [
  {
    icon: Building2,
    title: "FirstCall Property Solutions",
    description: "Hires & manages subcontractors",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
  {
    icon: TrendingUp,
    title: "DispatchIQ",
    description: "Dispatches jobs intelligently",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: Users,
    title: "Property Managers",
    description: "Save money & gain efficiency",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Handshake,
    title: "Subcontractors",
    description: "Motivated, fairly paid, repeat work",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
];

const BenefitsSection = () => {
  return (
    <section id="ecosystem" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              The Power of Two
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together, they form a closed-loop profit system.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemPartners.map((partner, index) => (
              <Card
                key={partner.title}
                className={`p-6 ${partner.bgColor} backdrop-blur-sm ${partner.borderColor} hover:shadow-lg transition-all duration-300 group animate-scale-in relative`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4 text-center">
                  <div className={`w-16 h-16 rounded-lg ${partner.bgColor} p-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <partner.icon className={`w-8 h-8 ${partner.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {partner.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {partner.description}
                  </p>
                </div>
                
                {/* Arrow connector */}
                {index < ecosystemPartners.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground italic">
            Together, they form a closed-loop profit system.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="text-foreground">Complete Ecosystem</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Benefits
                </span>
              </h3>
              <p className="text-lg text-muted-foreground">
                The synergy between FirstCall's subcontractor management and DispatchIQ's intelligent dispatch creates a powerful, profitable ecosystem for all stakeholders.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 animate-slide-in-right">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Increased profitability through optimized job matching</span>
              </div>
              <div className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Motivated subcontractors with fair compensation</span>
              </div>
              <div className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Streamlined property management operations</span>
              </div>
              <div className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <Handshake className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Long-term partnerships and repeat business</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="premium" size="xl" className="animate-pulse-glow">
                Learn More About the Ecosystem
              </Button>
            </div>
          </div>
          
          {/* Visual Representation */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/30">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 p-6 mx-auto">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">FirstCall + DispatchIQ</h4>
                <p className="text-muted-foreground">
                  The perfect partnership for modern property maintenance
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;