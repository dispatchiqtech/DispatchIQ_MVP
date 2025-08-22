import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-2.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 group">
              <div className="w-32 h-8 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-teal-glow transition-all duration-300 group-hover:scale-110">
                <img src={logo} alt="DispatchIQ" />
              </div>
              {/* <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">DispatchIQ</span> */}
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
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hover:bg-muted/50 transition-all duration-300">
                Contact
              </Button>
              <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                <Link to="/early-signup?role=technician">Early Access: Technicians</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                <Link to="/early-signup?role=property-owner">Early Access: Property Owners</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-muted/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background border border-border/60">
          <div className="flex flex-col h-full bg-gradient-mesh relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary/25 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
            </div>
            
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/60 relative z-10 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center shadow-md">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">DispatchIQ</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-muted/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-6 space-y-6 relative z-10">
              <a 
                href="#problem" 
                className="block text-lg text-muted-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border/20 hover:bg-card/50 rounded-lg px-3 -mx-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Problem
              </a>
              <a 
                href="#ecosystem" 
                className="block text-lg text-muted-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border/20 hover:bg-card/50 rounded-lg px-3 -mx-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ecosystem
              </a>
              <a 
                href="#detroit" 
                className="block text-lg text-muted-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border/20 hover:bg-card/50 rounded-lg px-3 -mx-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Detroit Story
              </a>
              <a 
                href="#investor" 
                className="block text-lg text-muted-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border/20 hover:bg-card/50 rounded-lg px-3 -mx-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investor Value
              </a>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="p-6 space-y-4 border-t border-border/60 relative z-10 bg-card/80 backdrop-blur-sm">
              <Button asChild variant="outline" className="w-full border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-glow">
                <Link to="/early-signup?role=technician" onClick={() => setIsMobileMenuOpen(false)}>
                  Early Access: Technicians
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-glow">
                <Link to="/early-signup?role=property-owner" onClick={() => setIsMobileMenuOpen(false)}>
                  Early Access: Property Owners
                </Link>
              </Button>
              <Button variant="ghost" className="w-full hover:bg-muted/50 transition-all duration-300">
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;