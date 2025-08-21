import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Zap, CreditCard, BarChart3, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoonSection = () => {
  return (
    <section id="coming-soon" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-teal" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in-up">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform property maintenance with AI-powered dispatching.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/30 hover:border-primary/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/20 p-4 mx-auto group-hover:bg-primary/30 transition-colors duration-300">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Q3 2025</h3>
                  <p className="text-foreground/70">Early Beta launches with Detroit property managers</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-secondary/30 hover:border-secondary/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-secondary/20 p-4 mx-auto group-hover:bg-secondary/30 transition-colors duration-300">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-secondary">Q4 2025</h3>
                  <p className="text-foreground/70">Invite-only National Beta access</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-accent/30 hover:border-accent/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-accent/20 p-4 mx-auto group-hover:bg-accent/30 transition-colors duration-300">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-accent">Q1 2026</h3>
                  <p className="text-foreground/70">Full public launch of DispatchIQ</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Be among the first to experience the future of property maintenance dispatching.
          </p>
        </div>

        {/* Why Choose DispatchIQ */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Why Choose DispatchIQ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-lg border-primary/30 hover:border-primary/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/20 p-4 mx-auto group-hover:bg-primary/30 transition-colors duration-300">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">⚡ Smarter Dispatching</h4>
                  <p className="text-foreground/70 text-sm">Our AI instantly matches the right technician to the right job, cutting response times by up to 40%.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-secondary/30 hover:border-secondary/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-secondary/20 p-4 mx-auto group-hover:bg-secondary/30 transition-colors duration-300">
                  <CreditCard className="w-8 h-8 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">💳 Seamless Payments</h4>
                  <p className="text-foreground/70 text-sm">Technicians are paid automatically upon job completion—no manual invoicing, no delays.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-accent/30 hover:border-accent/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-accent/20 p-4 mx-auto group-hover:bg-accent/30 transition-colors duration-300">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">📊 Real Time Insights</h4>
                  <p className="text-foreground/70 text-sm">Track profitability, performance, and job status from one powerful dashboard.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Trusted by Early Partners */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-primary/30">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Trusted by Early Partners</h3>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                DispatchIQ is already being piloted with property management groups across Detroit. Early adopters are helping us refine the platform and prepare for nationwide rollout.
              </p>
            </div>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            How DispatchIQ Works
          </h3>
          <p className="text-center text-foreground/70 mb-6">
            From work order to technician payment in one intelligent flow.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                <span className="text-primary font-bold">1</span>
              </div>
              <p className="text-sm font-medium">Job Request</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                <span className="text-secondary font-bold">2</span>
              </div>
              <p className="text-sm font-medium">AI Match</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                <span className="text-accent font-bold">3</span>
              </div>
              <p className="text-sm font-medium">Technician Assigned</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                <span className="text-primary font-bold">4</span>
              </div>
              <p className="text-sm font-medium">Payment Processed</p>
            </div>
          </div>
        </div>

        {/* Get Early Access */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-primary/30">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Get Early Access</h3>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Join our waitlist today to:
              </p>
              <ul className="text-foreground/70 space-y-2 max-w-2xl mx-auto text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Gain priority entry into our Beta program</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Shape DispatchIQ with your feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Receive exclusive updates and early adopter benefits</span>
                </li>
              </ul>
              <p className="text-sm text-foreground/60 italic">
                (Property managers, subcontractors, and investors welcome.)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-black px-8 py-3 shadow-glow">
                  <Link to="/early-signup?role=property-owner">
                    Join Waitlist - Property Owners
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 px-8 py-3">
                  <Link to="/early-signup?role=technician">
                    Join Waitlist - Technicians
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
