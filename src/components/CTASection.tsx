import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-mesh relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Ready to</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Revolutionize Your Dispatch?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join forward-thinking property management companies who have already transformed 
            their operations with DispatchIQ's intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group animate-pulse-glow">
              <Calendar className="w-5 h-5" />
              Schedule Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 hover:bg-primary/10">
              <MessageCircle className="w-5 h-5" />
              Contact Sales
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>24/7 support included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;