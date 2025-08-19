import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Users, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const EarlySignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    industry: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        industry: ""
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Early Access",
      description: "Be among the first to experience AI-powered dispatch optimization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Exclusive Updates",
      description: "Get insider information on new features and product roadmap"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Special Pricing",
      description: "Lock in founding customer rates and exclusive discounts"
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <SEO
          title="Early Access Signup - Join DispatchIQ"
          description="Join DispatchIQ's early access program for exclusive updates, special pricing, and early access to our AI-powered dispatch system. Be among the first to revolutionize your property management."
          keywords="DispatchIQ early access, join DispatchIQ, early signup, AI dispatch early access, property management software signup, dispatch software beta, maintenance automation early access"
        />
        <div className="min-h-screen bg-gradient-mesh flex items-center justify-center px-6">
        <Card className="w-full max-w-md text-center bg-card/80 backdrop-blur-sm border-primary/30 shadow-teal-glow">
          <CardContent className="pt-8 pb-8">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Welcome to DispatchIQ!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for joining our early access program. We'll be in touch soon with exclusive updates and early access opportunities.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>✓ Added to early access list</p>
              <p>✓ Welcome email sent</p>
              <p>✓ Product updates coming soon</p>
            </div>
            <Button 
              asChild 
              className="w-full mt-6 bg-primary hover:bg-primary/90 shadow-teal-glow"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Early Access Signup - Join DispatchIQ"
        description="Join DispatchIQ's early access program for exclusive updates, special pricing, and early access to our AI-powered dispatch system. Be among the first to revolutionize your property management."
        keywords="DispatchIQ early access, join DispatchIQ, early signup, AI dispatch early access, property management software signup, dispatch software beta, maintenance automation early access"
      />
      <div className="min-h-screen bg-gradient-mesh">
        {/* Header */}
        <div className="bg-card/80 backdrop-blur-sm border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                Back to Home
              </span>
            </Link>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Early Access
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">
                Join the Future
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Get Early Access
                </span>
                <br />
                <span className="text-foreground">to DispatchIQ</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Be among the first to revolutionize your field service operations with AI-powered dispatch optimization. 
                Join our exclusive early access program and shape the future of intelligent dispatch.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Early Access Benefits:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="text-primary">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-foreground/70">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-secondary/20 shadow-teal-glow/20">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold">Join Early Access</CardTitle>
              <CardDescription className="text-foreground/50">
                Fill out the form below to get exclusive early access to DispatchIQ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-secondary/30 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-secondary/30 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-secondary/30 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-secondary/30 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-secondary/30 focus:border-primary/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Job Role</Label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    >
                      <option value="">Select Role</option>
                      <option value="owner">Owner/Founder</option>
                      <option value="manager">Operations Manager</option>
                      <option value="dispatcher">Dispatcher</option>
                      <option value="technician">Technician</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    >
                      <option value="">Select Industry</option>
                      <option value="hvac">HVAC</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="cleaning">Cleaning Services</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 shadow-teal-glow hover:shadow-intense transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin mr-2" />
                      Joining Early Access...
                    </>
                  ) : (
                    "Join Early Access"
                  )}
                </Button>

                <p className="text-xs text-foreground/50 text-center">
                  By joining, you agree to receive updates about DispatchIQ. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
};

export default EarlySignup;
