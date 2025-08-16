import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Globe } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former operations executive with 15+ years in field service management. Led digital transformation for Fortune 500 companies.",
      avatar: "/api/placeholder/150/150",
      initials: "SC",
      linkedin: "#",
      twitter: "#",
      website: "#",
      expertise: ["Operations", "Strategy", "Leadership"]
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI/ML engineer with expertise in predictive analytics and real-time optimization. Previously at Google and Uber.",
      avatar: "/api/placeholder/150/150",
      initials: "MR",
      linkedin: "#",
      twitter: "#",
      website: "#",
      expertise: ["AI/ML", "Engineering", "Product"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Computer Science specializing in reinforcement learning and optimization algorithms. Published 20+ papers in top journals.",
      avatar: "/api/placeholder/150/150",
      initials: "EW",
      linkedin: "#",
      twitter: "#",
      website: "#",
      expertise: ["Research", "Algorithms", "Data Science"]
    },
    {
      name: "David Kim",
      role: "VP of Product",
      bio: "Product leader with deep experience in B2B SaaS and field service software. Previously scaled products at ServiceTitan.",
      avatar: "/api/placeholder/150/150",
      initials: "DK",
      linkedin: "#",
      twitter: "#",
      website: "#",
      expertise: ["Product", "UX", "Growth"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-red" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in-up">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Meet the Minds
            </span>
            <br />
            <span className="text-foreground">Behind DispatchIQ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a team of industry veterans, AI researchers, and product experts 
            passionate about revolutionizing field service dispatch through intelligent automation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border-secondary/20 hover:border-primary/40 hover:shadow-red-glow/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Avatar */}
                <div className="relative mx-auto">
                  <Avatar className="w-24 h-24 mx-auto border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs px-2 py-1 border-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-2">
                  <a 
                    href={member.linkedin} 
                    className="p-2 rounded-full bg-secondary/20 hover:bg-primary/20 hover:text-primary transition-all duration-300 group-hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.twitter} 
                    className="p-2 rounded-full bg-secondary/20 hover:bg-primary/20 hover:text-primary transition-all duration-300 group-hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.website} 
                    className="p-2 rounded-full bg-secondary/20 hover:bg-primary/20 hover:text-primary transition-all duration-300 group-hover:scale-110"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="text-center space-y-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold text-foreground">
            Our Mission & Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-primary rounded-lg" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Innovation First</h4>
              <p className="text-muted-foreground text-sm">
                We push the boundaries of what's possible with AI and automation in field service.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-accent rounded-lg" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Customer Success</h4>
              <p className="text-muted-foreground text-sm">
                Every decision we make is driven by our customers' success and profitability.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-success rounded-lg" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Reliability</h4>
              <p className="text-muted-foreground text-sm">
                We build systems that businesses can depend on 24/7 for their critical operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
