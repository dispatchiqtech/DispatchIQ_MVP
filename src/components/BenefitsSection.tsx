import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Clock, Shield } from "lucide-react";

const benefits = [
  "85% increase in dispatch profitability through AI optimization",
  "50% reduction in response times with intelligent routing",
  "Automated compliance tracking and reporting",
  "Real-time technician availability and location tracking",
  "Seamless integration with existing property management systems",
  "White-label licensing opportunities for scalable growth",
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-foreground">Transform Your</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Property Management
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                DispatchIQ delivers measurable results through intelligent automation, 
                giving you the competitive edge in property management operations.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button variant="premium" size="xl" className="animate-pulse-glow">
                Start Your Free Trial
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-teal-glow/20 hover:shadow-teal-glow/40 transition-all duration-300">
              <div className="space-y-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <div className="text-2xl font-bold text-foreground">$2.4M+</div>
                <div className="text-sm text-muted-foreground">Revenue Optimized</div>
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 shadow-purple-glow/20 hover:shadow-purple-glow/40 transition-all duration-300">
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-secondary" />
                <div className="text-2xl font-bold text-foreground">15min</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-teal-glow/20 hover:shadow-teal-glow/40 transition-all duration-300">
              <div className="space-y-2">
                <Shield className="w-8 h-8 text-primary" />
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 shadow-purple-glow/20 hover:shadow-purple-glow/40 transition-all duration-300">
              <div className="space-y-2">
                <TrendingUp className="w-8 h-8 text-secondary" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Jobs Optimized Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;