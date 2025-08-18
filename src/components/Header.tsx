import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center shadow-md group-hover:shadow-teal-glow transition-all duration-300 group-hover:scale-110">
              <Brain className="w-5 h-5 text-white group-hover:animate-pulse" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">DispatchIQ</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Problem
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#ecosystem" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Ecosystem
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#detroit" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Detroit Story
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#investor" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              Investor Value
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex hover:bg-muted/50 transition-all duration-300">
              Contact
            </Button>
            <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
              <Link to="/early-signup">Request Deck</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;