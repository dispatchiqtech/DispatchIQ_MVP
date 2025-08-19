import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Property Maintenance Dispatch",
    excerpt: "Discover how artificial intelligence is transforming the way property managers handle maintenance requests and dispatch technicians efficiently.",
    category: "AI Technology",
    readTime: "5 min read",
    date: "2024-12-19",
    slug: "ai-revolutionizing-property-maintenance-dispatch"
  },
  {
    id: 2,
    title: "5 Ways to Increase Profitability in Property Management",
    excerpt: "Learn proven strategies to boost your property management profits through intelligent dispatch optimization and workflow automation.",
    category: "Business Tips",
    readTime: "7 min read",
    date: "2024-12-18",
    slug: "increase-profitability-property-management"
  },
  {
    id: 3,
    title: "The Future of Subcontractor Management",
    excerpt: "Explore how modern dispatch systems are changing the game for subcontractor management and field service operations.",
    category: "Industry Trends",
    readTime: "6 min read",
    date: "2024-12-17",
    slug: "future-subcontractor-management"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>DispatchIQ Blog - AI Dispatch & Property Management Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI-powered dispatch systems, property management optimization, and industry trends. Expert analysis and practical tips for property managers." />
        <meta name="keywords" content="DispatchIQ blog, AI dispatch blog, property management blog, dispatch system insights, maintenance automation blog, field service blog, subcontractor management blog" />
        <link rel="canonical" href="https://dispatchiq.app/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DispatchIQ Blog - AI Dispatch & Property Management Insights" />
        <meta property="og:description" content="Stay updated with the latest insights on AI-powered dispatch systems, property management optimization, and industry trends." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://dispatchiq.app/blog" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "DispatchIQ Blog",
          "description": "AI Dispatch & Property Management Insights",
          "url": "https://dispatchiq.app/blog",
          "publisher": {
            "@type": "Organization",
            "name": "DispatchIQ"
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": "DispatchIQ"
            }
          }))
        })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              DispatchIQ Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AI Dispatch
              </span>
              <br />
              <span className="text-foreground">Insights & Trends</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI-powered dispatch systems, 
              property management optimization, and industry trends.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-card bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-foreground/60">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-foreground/60">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 text-sm font-medium flex items-center group"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
