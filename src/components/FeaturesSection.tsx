import { Card } from "@/components/ui/card";
import { Bot, Smartphone, BarChart3, Cog, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Driven Technician Scoring",
    description: "Intelligent matching based on location, availability, tier level, and profitability metrics for optimal job assignment.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Smartphone,
    title: "Real-time Dispatch Tracking",
    description: "Progressive Web App with SMS and email notifications for instant status updates and seamless communication.",
    gradient: "from-accent to-accent-glow",
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Comprehensive analytics, automated invoicing, and compliance management to streamline your operations.",
    gradient: "from-success to-success",
  },
  {
    icon: Cog,
    title: "API-First Architecture",
    description: "Built for integration and scalability with existing property management systems and future licensing opportunities.",
    gradient: "from-warning to-warning",
  },
  {
    icon: Users,
    title: "Subcontractor Management",
    description: "Complete lifecycle management from onboarding to payment, with performance tracking and tier-based assignments.",
    gradient: "from-primary-glow to-accent",
  },
  {
    icon: Zap,
    title: "White-label Ready",
    description: "Scalable infrastructure provider positioning for licensing to other companies and custom branding opportunities.",
    gradient: "from-accent-glow to-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-foreground">Built for Modern Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to optimize your dispatch operations and maximize profitability through intelligent automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;