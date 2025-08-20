import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Building2, 
  Briefcase, 
  Industry,
  Download,
  Search,
  RefreshCw
} from "lucide-react";
import { DatabaseService } from "@/lib/database";
import { supabase } from "@/lib/supabase";
import type { EarlySignup } from "@/lib/supabase";

interface Analytics {
  total_signups: number;
  signups_last_7_days: number;
  signups_last_30_days: number;
  with_company: number;
  with_role: number;
  with_industry: number;
}

const Admin = () => {
  const [signups, setSignups] = useState<EarlySignup[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [filteredSignups, setFilteredSignups] = useState<EarlySignup[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // Filter signups based on search term and role filter
    const filtered = signups.filter(signup => {
      const matchesSearch = 
        signup.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        signup.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        signup.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        signup.company?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRole = roleFilter === "all" || signup.user_type === roleFilter;
      
      return matchesSearch && matchesRole;
    });
    setFilteredSignups(filtered);
  }, [searchTerm, roleFilter, signups]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [signupsData, analyticsData] = await Promise.all([
        DatabaseService.getAllEarlySignups(),
        loadAnalytics()
      ]);
      
      setSignups(signupsData);
      setFilteredSignups(signupsData);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadAnalytics = async (): Promise<Analytics> => {
    try {
      const { data, error } = await supabase
        .from('early_signup_analytics')
        .select('*')
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error loading analytics:', error);
      // Fallback to calculated analytics
      return {
        total_signups: signups.length,
        signups_last_7_days: signups.filter(s => 
          new Date(s.created_at!).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
        ).length,
        signups_last_30_days: signups.filter(s => 
          new Date(s.created_at!).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
        ).length,
        with_company: signups.filter(s => s.company).length,
        with_role: signups.filter(s => s.role).length,
        with_industry: signups.filter(s => s.industry).length
      };
    }
  };

  const exportToCSV = () => {
    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'User Type', 'Company', 'Role', 'Industry', 'Created At'];
    const csvContent = [
      headers.join(','),
      ...filteredSignups.map(signup => [
        signup.first_name,
        signup.last_name,
        signup.email,
        signup.phone,
        signup.user_type || '',
        signup.company || '',
        signup.role || '',
        signup.industry || '',
        new Date(signup.created_at!).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dispatchiq-signups-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
          <p className="text-foreground/70">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - DispatchIQ Early Signups</title>
        <meta name="description" content="Admin dashboard for managing DispatchIQ early signup submissions and analytics." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-foreground/70">Early Signup Management & Analytics</p>
            </div>
            <div className="flex space-x-3">
              <Button onClick={loadData} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button onClick={exportToCSV} size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-card bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-foreground/70">Total Signups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{analytics?.total_signups || 0}</div>
                    <p className="text-xs text-foreground/60">All time</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-foreground/70">Last 7 Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{analytics?.signups_last_7_days || 0}</div>
                    <p className="text-xs text-foreground/60">Recent activity</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-foreground/70">With Company</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-8 h-8 text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{analytics?.with_company || 0}</div>
                    <p className="text-xs text-foreground/60">Company info</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="border-0 shadow-card bg-card mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 w-full sm:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <Input
                      placeholder="Search by name, email, or company..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-secondary/30 focus:border-primary/50"
                    />
                  </div>
                </div>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full sm:w-auto px-3 py-2 bg-background border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-sm"
                >
                  <option value="all">All Types</option>
                  <option value="technician">Technicians</option>
                  <option value="property-owner">Property Owners</option>
                  <option value="general">General</option>
                </select>
                <Badge variant="secondary" className="bg-primary/10 text-primary w-fit">
                  {filteredSignups.length} results
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Signups Table */}
          <Card className="border-0 shadow-card bg-card">
            <CardHeader>
              <CardTitle>Early Signup Submissions</CardTitle>
              <CardDescription>
                Manage and review all early access requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <div className="min-w-[800px]">
                  <table className="w-full">
                  <thead>
                    <tr className="border-b border-secondary/20">
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Name</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Email</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Phone</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Type</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Company</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Role</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Industry</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground/70">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSignups.map((signup) => (
                      <tr key={signup.id} className="border-b border-secondary/10 hover:bg-secondary/5">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-foreground">
                              {signup.first_name} {signup.last_name}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-foreground/80">{signup.email}</td>
                        <td className="py-3 px-4 text-foreground/80">{signup.phone}</td>
                        <td className="py-3 px-4">
                          {signup.user_type ? (
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                signup.user_type === 'technician' 
                                  ? 'border-primary/30 text-primary' 
                                  : signup.user_type === 'property-owner'
                                  ? 'border-secondary/30 text-secondary'
                                  : 'border-accent/30 text-accent'
                              }`}
                            >
                              {signup.user_type === 'technician' ? 'Technician' :
                               signup.user_type === 'property-owner' ? 'Property Owner' :
                               signup.user_type}
                            </Badge>
                          ) : (
                            <span className="text-foreground/40">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          {signup.company ? (
                            <Badge variant="outline" className="text-xs">
                              {signup.company}
                            </Badge>
                          ) : (
                            <span className="text-foreground/40">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          {signup.role ? (
                            <Badge variant="outline" className="text-xs">
                              {signup.role}
                            </Badge>
                          ) : (
                            <span className="text-foreground/40">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          {signup.industry ? (
                            <Badge variant="outline" className="text-xs">
                              {signup.industry}
                            </Badge>
                          ) : (
                            <span className="text-foreground/40">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-sm text-foreground/60">
                          {new Date(signup.created_at!).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredSignups.length === 0 && (
                <div className="text-center py-8 text-foreground/60">
                  No signups found matching your search criteria.
                </div>
              )}
            </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Admin;
