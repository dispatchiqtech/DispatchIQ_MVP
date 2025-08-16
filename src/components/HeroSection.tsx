import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/dispatch-hero.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={''} 
          alt="AI Dispatch Dashboard" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-red" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary-glow/25 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-bounce-in" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary/20 rounded-full blur-md animate-wiggle" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 shadow-red-glow/50 animate-bounce-in">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Dispatch Platform</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Intelligent Dispatch
            </span>
            <br />
            <span className="text-foreground">That Maximizes Profit</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DispatchIQ uses AI to match service requests with the most profitable and available technicians, 
            streamlining your entire job lifecycle from dispatch to payment.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Profit Increase</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-accent">50%</div>
              <div className="text-sm text-muted-foreground">Faster Dispatch</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-success">99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <Button asChild variant="hero" size="xl" className="group shadow-red-glow hover:shadow-intense transition-all duration-500 animate-pulse-red">
              <Link to="/early-signup">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-card/60 backdrop-blur-sm border-secondary/20 hover:border-primary/40 hover:bg-card/80 hover:shadow-subtle transition-all duration-300">
              <Link to="/early-signup">Early Access</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;