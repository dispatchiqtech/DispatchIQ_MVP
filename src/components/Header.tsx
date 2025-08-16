import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center shadow-md group-hover:shadow-red-glow transition-all duration-300 group-hover:scale-110">
              <Zap className="w-5 h-5 text-white group-hover:animate-pulse" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">DispatchIQ</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#api" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              API
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex hover:bg-muted/50 transition-all duration-300">
              Sign In
            </Button>
            <Button variant="premium" size="sm" className="shadow-md hover:shadow-red-glow transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;