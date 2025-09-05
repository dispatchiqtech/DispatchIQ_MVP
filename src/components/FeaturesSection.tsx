import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Brain, TrendingUp, Users, Zap } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Slow response times",
    description: "Delays in addressing maintenance requests lead to tenant dissatisfaction and potential property damage.",
    color: "text-destructive",
  },
  {
    icon: AlertTriangle,
    title: "Inefficient dispatching",
    description: "Manual assignment processes result in suboptimal technician-job matching and wasted resources.",
    color: "text-destructive",
  },
  {
    icon: AlertTriangle,
    title: "Subcontractors undervalued",
    description: "Skilled technicians not properly compensated or recognized for their expertise and reliability.",
    color: "text-destructive",
  },
  {
    icon: AlertTriangle,
    title: "Property managers losing profits",
    description: "Inefficient operations and poor resource allocation directly impact bottom-line profitability.",
    color: "text-destructive",
  },
];

const solutions = [
  {
    icon: CheckCircle,
    title: "AI matches the right tech to the right job, every time",
    description: "Intelligent algorithms ensure optimal technician-job matching based on skills, location, and availability.",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Real-time profitability tracking",
    description: "Live dashboards provide instant insights into job profitability and operational efficiency.",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Subcontractors stay motivated & loyal",
    description: "Fair compensation and recognition systems create long-term partnerships with skilled technicians.",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Zero-friction integration with existing systems",
    description: "Seamless API integration with current property management platforms and workflows.",
    color: "text-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="problem" className="py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Property Maintenance is <span className="text-destructive">Broken</span>
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className="p-6 bg-card/20 backdrop-blur-sm border-destructive/30 hover:border-destructive/50 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-lg bg-destructive/20 p-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {problem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Visual: Before vs After */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-destructive/30">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-destructive">Before DispatchIQ</h3>
                <div className="w-16 h-16 rounded-lg bg-destructive/20 p-4 mx-auto">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <p className="text-foreground/70">Chaos, high costs, inefficiency</p>
              </div>
            </Card>
            
            {/* After */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-primary">With DispatchIQ</h3>
                <div className="w-16 h-16 rounded-lg bg-primary/20 p-4 mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground/70">Clean workflow, profit growth</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DispatchIQ Fixes This
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="p-8 bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 p-3 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className={`w-6 h-6 ${solution.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16 animate-fade-in-up mt-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Testimonial 1 */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 group animate-scale-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 p-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Robert Ayers</h4>
                  <p className="text-sm text-foreground/70">CEO Senior Project Manager</p>
                </div>
              </div>
              <blockquote className="text-foreground/80 italic leading-relaxed">
                "DispatchIQ solves the exact pain property managers deal with every day. Faster technician response times mean fewer angry tenants and more efficient operations."
              </blockquote>
            </div>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-all duration-300 group animate-scale-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 p-3">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Antwan G</h4>
                  <p className="text-sm text-foreground/70">Licensed HVAC Subcontractor</p>
                </div>
              </div>
              <blockquote className="text-foreground/80 italic leading-relaxed">
                "As a subcontractor, getting matched to the right job and paid automatically is a game changer. No more chasing invoices, I can focus on the work."
              </blockquote>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-accent/30 hover:border-accent/50 transition-all duration-300 group animate-scale-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 p-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Rachel G.</h4>
                  <p className="text-sm text-foreground/70">Regional Property Manager</p>
                </div>
              </div>
              <blockquote className="text-foreground/80 italic leading-relaxed">
                "We've been piloting DispatchIQ across our Detroit properties, and the AI matching has already cut our average work order completion time in half."
              </blockquote>
            </div>
          </Card>

          {/* Testimonial 4 */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 group animate-scale-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 p-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Maxim Makatchev</h4>
                  <p className="text-sm text-foreground/70">Senior Developer & Technical Advisor</p>
                </div>
              </div>
              <blockquote className="text-foreground/80 italic leading-relaxed">
                "This is exactly the type of innovation Detroit needs combining AI and real-world workforce management. DispatchIQ is ahead of the curve."
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;