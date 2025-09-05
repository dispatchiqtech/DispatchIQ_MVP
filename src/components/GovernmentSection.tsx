import { Building2, Shield, TrendingUp, Database, FileText, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GovernmentSection = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              DispatchIQ for Government
            </h2>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto px-4">
            AI Infrastructure for America's Workforce Resilience
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4">
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            America's housing, utilities, and infrastructure rely on skilled tradesmen, yet over 60% are nearing retirement, 
            and new workers aren't entering fast enough. DispatchIQ provides the digital backbone to protect, grow, 
            and modernize this essential workforce.
          </p>
        </div>

        {/* Why It Matters to Government */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-foreground mb-8 md:mb-12 px-4">
            Why It Matters to Government
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card className="border-0 shadow-card bg-card backdrop-blur-sm border-primary/30">
              <CardHeader className="text-center pb-3 md:pb-4 px-4 md:px-6">
                <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <CardTitle className="text-base md:text-lg text-foreground">Workforce Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 md:px-6 pb-4 md:pb-6">
                <CardDescription className="text-foreground/70 text-sm md:text-base">
                  Without trades, infrastructure fails. DispatchIQ ensures workers are retained, trained, and efficiently dispatched.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-card backdrop-blur-sm border-secondary/30">
              <CardHeader className="text-center pb-3 md:pb-4 px-4 md:px-6">
                <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <CardTitle className="text-base md:text-lg text-foreground">Economic Stability</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 md:px-6 pb-4 md:pb-6">
                <CardDescription className="text-foreground/70 text-sm md:text-base">
                  Reduces project delays, lowers taxpayer costs, and keeps housing and infrastructure on track.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-card backdrop-blur-sm border-accent/30">
              <CardHeader className="text-center pb-3 md:pb-4 px-4 md:px-6">
                <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <CardTitle className="text-base md:text-lg text-foreground">National Data Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 md:px-6 pb-4 md:pb-6">
                <CardDescription className="text-foreground/70 text-sm md:text-base">
                  Real-time workforce intelligence for policymakers to monitor labor shortages and respond faster.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-card backdrop-blur-sm border-primary/30">
              <CardHeader className="text-center pb-3 md:pb-4 px-4 md:px-6">
                <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <CardTitle className="text-base md:text-lg text-foreground">Policy Alignment</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 md:px-6 pb-4 md:pb-6">
                <CardDescription className="text-foreground/70 text-sm md:text-base">
                  Supports Department of Labor modernization, HUD housing initiatives, and the Infrastructure Investment & Jobs Act.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">Our Commitment</h3>
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            DispatchIQ is more than software. It's workforce infrastructure, designed to keep America strong by ensuring 
            skilled labor is always where it's needed most.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-black px-6 md:px-8 py-3 text-sm md:text-base shadow-glow w-full max-w-lg">
            <Handshake className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            <span className="hidden sm:inline">Partner with us to build a stronger U.S. workforce</span>
            <span className="sm:hidden">Partner for workforce resilience</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;
