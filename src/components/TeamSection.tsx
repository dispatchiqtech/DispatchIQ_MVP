import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Factory, Brain, Quote } from "lucide-react";
import detroitFactories from "@/assets/detroit-factories.jpg";
import detroitAiHub from "@/assets/detroit-ai-hub.jpg";

const TeamSection = () => {
  return (
    <section id="detroit" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-teal" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in-up">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              From Automotive Hub
            </span>
            <br />
            <span className="text-foreground">to AI Hub</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Detroit once changed the world with the automotive industry. DispatchIQ is bringing that spirit of innovation back—this time through AI-driven workforce transformation.
          </p>
        </div>

        {/* Visual: Detroit Transformation */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before: Detroit Auto Factories */}
            <Card className="p-8 bg-card/50 backdrop-blur-lg border-muted/30 hover:border-muted/60 transition-all duration-500 group">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 rounded-xl bg-muted/20 p-5 mx-auto group-hover:bg-muted/30 transition-colors duration-300">
              <Factory className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold transition-colors duration-300">
              Historic Detroit
            </h3>
            <p className="">
              Black & white photo of Detroit auto factories
            </p>
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={detroitFactories} 
                alt="Historic Detroit auto factories"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </Card>
            
            {/* After: Modern AI Hub */}
            <Card className="p-8 bg-card/50 backdrop-blur-lg border-primary/30 hover:border-primary/60 transition-all duration-500 group hover:shadow-glow">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 rounded-xl bg-primary/20 p-5 mx-auto group-hover:bg-primary/30 transition-colors duration-300">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
              Modern AI Hub
            </h3>
            <p className="">
              Transitioning into a modern AI hub
            </p>
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-accent">
              <img 
                src={detroitAiHub} 
                alt="Modern Detroit AI hub"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </Card>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="mb-16">
          <Card className="p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-primary/30">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 p-4 mx-auto">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              <blockquote className="text-3xl md:text-4xl font-bold text-foreground italic leading-relaxed">
                "DispatchIQ is the new assembly line, built for the maintenance workforce."
              </blockquote>
              <p className="text-lg text-foreground/50">
                — DispatchIQ Team
              </p>
            </div>
          </Card>
        </div>

        {/* Detroit Innovation Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="text-foreground">The Detroit</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Innovation Story
                </span>
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Just as Henry Ford revolutionized manufacturing with the assembly line, DispatchIQ is revolutionizing property maintenance with AI-powered dispatch. We're proud to be part of Detroit's tech renaissance, bringing cutting-edge technology to an industry that's ready for transformation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 animate-slide-in-right">
                <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Built in Detroit, serving the world</span>
              </div>
              <div className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">AI innovation meets industrial expertise</span>
              </div>
              <div className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <Factory className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Revolutionizing workforce management</span>
              </div>
            </div>
          </div>
          
          {/* Detroit Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="p-6 bg-primary/10 backdrop-blur-sm border-primary/30">
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-foreground/90">Years of Innovation</div>
              </div>
            </Card>
            
            <Card className="p-6 bg-secondary/10 backdrop-blur-sm border-secondary/30">
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-secondary">AI</div>
                <div className="text-sm text-foreground/90">Powered Future</div>
              </div>
            </Card>
            
            <Card className="p-6 bg-accent/10 backdrop-blur-sm border-accent/30">
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-accent">Detroit</div>
                  <div className="text-sm text-foreground/90">Tech Hub</div>
              </div>
            </Card>
            
            <Card className="p-6 bg-primary/10 backdrop-blur-sm border-primary/30">
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-primary">DispatchIQ</div>
                <div className="text-sm text-foreground/90">Leading the Way</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
