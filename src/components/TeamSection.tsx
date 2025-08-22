import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  GraduationCap,
  Lightbulb,
  Target,
  Brain,
  Code,
  Building2,
} from "lucide-react";

const TeamSection = () => {
  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-teal" />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
          >
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Meet the Team
            </span>
            <br />
            <span className="text-foreground">Behind DispatchIQ</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Together, this team combines world-class technical expertise,
            real-world industry experience, and visionary leadership to make
            DispatchIQ the most trusted name in AI-powered dispatching.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="space-y-8 mb-16">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Robert Ayers - CEO */}
            <Card className="p-8 bg-card/50 backdrop-blur-lg border-primary/30 hover:border-primary/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Robert Ayers</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Chief Executive Officer (CEO)
                  </Badge>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Robert Ayers is an accomplished Senior IT Project Manager with over 20 years of experience leading complex technology and healthcare infrastructure initiatives. As CEO of DispatchIQ, Robert brings a proven ability to configure enterprise systems that align people, processes, and technology to drive results.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Key Strengths:
                  </h4>
                  <ul className="text-sm text-foreground/70 space-y-1 text-left">
                    <li>• 20+ years in IT Project Management</li>
                    <li>• Healthcare infrastructure expertise</li>
                    <li>• Enterprise system configuration</li>
                    <li>• Technology transformation leadership</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Darcy Ayers - COO */}
            <Card className="p-8 bg-card/50 backdrop-blur-lg border-secondary/30 hover:border-secondary/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Darcy Ayers</h3>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                    Chief Operating Officer (COO)
                  </Badge>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Darcy brings over five years of experience in leasing and property management, where she developed a strong foundation in client relations, operations, and organizational management. A dedicated family-oriented professional, Darcy is passionate about building efficient systems that keep teams aligned and projects moving forward.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-secondary" />
                    Key Strengths:
                  </h4>
                  <ul className="text-sm text-foreground/70 space-y-1 text-left">
                    <li>• 5+ years in property management</li>
                    <li>• Client relations & operations</li>
                    <li>• Organizational management</li>
                    <li>• Team alignment & project coordination</li>
                  </ul>
                </div>
              </div>
            </Card>

             {/* Justin Lott */}
             <Card className="p-8 bg-card/50 backdrop-blur-lg border-primary/30 hover:border-primary/60 transition-all duration-500 group hover:shadow-glow">

                <div className="text-center space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Justin Lott</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Founder & CIO
                    </Badge>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Justin is the Founder and Chief Innovative Officer of DispatchIQ. With more than a decade of experience in regional property maintenance and subcontractor management, Justin brings firsthand industry knowledge to the platform.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Background Highlights:
                    </h4>
                    <ul className="text-sm text-foreground/70 space-y-1 text-left">
                      <li>• Founder & CIO of DispatchIQ</li>
                      <li>• Co-Founder FirstCall Property Solutions LLC</li>
                      <li>• 10+ years in regional property maintenance management</li>
                      <li>• Deep knowledge of subcontractor operations & dispatch workflows</li>
                      <li>• Visionary in scaling AI-powered workforce platforms</li>
                    </ul>
                  </div>
                </div>
              </Card>
         
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <Card className="p-8 bg-card/50 backdrop-blur-lg border-secondary/30 hover:border-secondary/60 transition-all duration-500 group hover:shadow-glow">
                <div className="text-center space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Tracy Anele</h3>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                      Lead Developer (MVP Build)
                    </Badge>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Tracy leads the core development of DispatchIQ's MVP. With a strong foundation in Computer Science and Software Engineering, she specializes in front end and back end development, API integrations, and UI/UX optimization.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-secondary" />
                      Education & Skills:
                    </h4>
                    <ul className="text-sm text-foreground/70 space-y-1 text-left">
                      <li>• B.Sc. in Computer Science (Software Engineering focus)</li>
                      <li>• Full-Stack Development (React, Node.js, Python, Django)</li>
                      <li>• Database Management (PostgreSQL, MongoDB, MySQL)</li>
                      <li>• API & Third-Party Integrations</li>
                      <li>• UI/UX Design & Implementation</li>
                      <li>• Agile Development / Rapid MVP Prototyping</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <Card className="p-8 bg-card/50 backdrop-blur-lg border-accent/30 hover:border-accent/60 transition-all duration-500 group hover:shadow-glow">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Maxim Makatchev</h3>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    Senior Developer Advisor & Mentor
                  </Badge>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Maxim is a highly respected software architect with over a decade of experience leading AI, cloud, and SaaS product development. He has contributed to enterprise-level platforms that scaled across industries, and now serves as Senior Developer Advisor and Mentor for DispatchIQ.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-accent" />
                    Key Strengths:
                  </h4>
                  <ul className="text-sm text-foreground/70 space-y-1 text-left">
                    <li>• AI & Machine Learning systems</li>
                    <li>• Cloud architecture (AWS, Azure, GCP)</li>
                    <li>• SaaS scalability & security compliance</li>
                    <li>• Product mentorship & developer leadership</li>
                  </ul>
                </div>
              </div>
            </Card>

             
            </div>
          </div>
        </div>

        {/* Team Mission Statement */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-primary/30">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 p-4 mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic leading-relaxed max-w-4xl mx-auto">
                "Together, this team combines world-class technical expertise,
                real-world industry experience, and visionary leadership to make
                DispatchIQ the most trusted name in AI-powered dispatching."
              </blockquote>
              <div className="flex items-center justify-center gap-2 text-lg text-foreground/50">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span>DispatchIQ Team Mission</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
