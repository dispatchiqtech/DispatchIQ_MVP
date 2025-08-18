import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Users, Building2, Calendar, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section id="investor" className="py-24 bg-gradient-mesh relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Impact & Investor Value Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Grant-Worthy. Investor-Ready.
            </span>
          </h2>
        </div>

        {/* Investment Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <Card className="p-6 bg-primary/10 backdrop-blur-sm border-primary/20 text-center">
            <div className="space-y-2">
              <DollarSign className="w-8 h-8 text-primary mx-auto" />
              <div className="text-2xl font-bold text-foreground">$100B+</div>
              <div className="text-sm text-foreground/90">Property Management Market</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-secondary/10 backdrop-blur-sm border-secondary/20 text-center">
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 text-secondary mx-auto" />
              <div className="text-2xl font-bold text-foreground">Proven</div>
              <div className="text-sm text-foreground/90">Operations via FirstCall Data</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-accent/10 backdrop-blur-sm border-accent/20 text-center">
            <div className="space-y-2">
              <DollarSign className="w-8 h-8 text-accent mx-auto" />
              <div className="text-2xl font-bold text-foreground">SaaS +</div>
              <div className="text-sm text-foreground/90">Dispatch Fees = Recurring Revenue</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-primary/10 backdrop-blur-sm border-primary/20 text-center">
            <div className="space-y-2">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <div className="text-2xl font-bold text-foreground">Workforce</div>
              <div className="text-sm text-foreground/90">Empowerment Through Success</div>
            </div>
          </Card>
          
          <Card className="p-6 bg-secondary/10 backdrop-blur-sm border-secondary/20 text-center">
            <div className="space-y-2">
              <Building2 className="w-8 h-8 text-secondary mx-auto" />
              <div className="text-2xl font-bold text-foreground">Detroit</div>
              <div className="text-sm text-foreground/90">Tech Renaissance Story</div>
            </div>
          </Card>
        </div>

        {/* Revenue Growth Chart Visual */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-primary/30">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Revenue Growth → Subcontractor Motivation → Property Manager Savings</h3>
              <div className="flex justify-center space-x-8">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/90">Revenue Growth</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground/90">Subcontractor Motivation</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-accent" />
                  </div>
                  <span className="text-sm text-foreground/90">Property Manager Savings</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Investor CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="xl" className="group">
            <Calendar className="w-5 h-5" />
            View Funding Deck
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="xl" className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 hover:bg-primary/10">
            <MessageCircle className="w-5 h-5" />
            Schedule Investor Call
          </Button>
        </div>

        {/* Final Call to Action */}
        <div className="text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Join us in redefining</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              property maintenance.
            </span>
          </h2>
          
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
            Invest in the future of workforce AI. Partner in Detroit's next tech revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              <DollarSign className="w-5 h-5" />
              I'm an Investor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 hover:bg-primary/10">
              <Building2 className="w-5 h-5" />
              I'm a Grant Partner
            </Button>
            
            <Button variant="outline" size="xl" className="bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 hover:bg-secondary/10">
              <Users className="w-5 h-5" />
              I'm a Property Manager
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-foreground/90">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Proven operations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Recurring revenue model</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Detroit tech renaissance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;