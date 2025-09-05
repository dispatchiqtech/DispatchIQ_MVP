import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        {/* AI Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 border border-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-28 h-28 border border-primary/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-accent/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
          {/* Circuit lines */}
          <div className="absolute top-1/3 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-teal" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary/25 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-bounce-in" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary/20 rounded-full blur-md animate-wiggle" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up mt-20 md:mt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 shadow-teal-glow/50 animate-bounce-in">
            <Brain className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/70">AI-Powered Dispatch System</span>
          </div>
          
          {/* Coming Soon Badge */}
          <div className="inline-flex ml-2 items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm border border-accent/40 rounded-full px-6 py-2 shadow-lg animate-pulse">
            <div className="w-4 h-4 bg-accent rounded-full animate-ping" />
            <span className="text-sm font-semibold text-accent">Coming Soon</span>
          </div>
          
          {/* Main Headline - Updated to match mockup */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Teach Your Maintenance
            </span>
            <br />
            <span className="text-foreground">To Think</span>
          </h1>
          
          {/* Tagline */}
          {/* <p className="text-lg md:text-xl text-primary font-medium max-w-2xl mx-auto leading-relaxed">
            "AI-powered dispatch that matches the right technician, every time."
          </p> */}
          
          {/* Subheadline - Updated to match mockup */}
          <p className="text-lg md:text-xl text-primary font-medium max-w-2xl mx-auto leading-relaxed">
            The first AI-powered dispatch system revolutionizing property maintenance.
          </p>
          
          {/* Early Access Writeup */}
          <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Be Among the First to Experience the Future
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Join our exclusive early access program and get priority access to DispatchIQ when we launch. 
                Early adopters will receive special pricing, and the 
                opportunity to shape the future of AI-powered maintenance dispatch.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Exclusive early access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Special launch pricing</span>
                </div>
          
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary">100B+</div>
              <div className="text-sm text-foreground/70">Market Size</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-accent">AI</div>
              <div className="text-sm text-foreground/70">Powered</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-success">Detroit</div>
              <div className="text-sm text-foreground/70">Tech Hub</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center " style={{ animationDelay: '0.8s' }}>
          <Button variant="hero" size="xl" className="w-full sm:w-auto text-black">
          <Link to="/early-signup">
                Request Investor Deck
              </Link>
            </Button>
            <Button variant="outline-glow" size="xl" className="w-full sm:w-auto">
              <Link to="/early-signup">Join Pilot Program</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;