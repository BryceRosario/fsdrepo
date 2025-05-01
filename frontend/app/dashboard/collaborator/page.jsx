import { BarChart, Briefcase, CheckCircle, FileText, Users, MessageSquare } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import DashboardLayout from "../layout"
import Link from "next/link"

export default function CollaboratorDashboardPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Welcome back, TechCorp</h1>
        <p className="text-muted-foreground">Here's what's happening with your opportunities and applicants.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Active Opportunities</p>
              <h3 className="text-2xl font-bold mt-1">8</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+2 new</span>
            <span className="text-muted-foreground ml-2">this month</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
              <h3 className="text-2xl font-bold mt-1">42</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+15</span>
            <span className="text-muted-foreground ml-2">this week</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Selected Candidates</p>
              <h3 className="text-2xl font-bold mt-1">12</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <Users className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+5</span>
            <span className="text-muted-foreground ml-2">this month</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
              <h3 className="text-2xl font-bold mt-1">85%</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <BarChart className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+7%</span>
            <span className="text-muted-foreground ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Feature Quick Access */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Post Opportunities</h3>
              <p className="text-xs text-muted-foreground mb-3">Create internships and programs</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/collaborator/opportunities">Create</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Application Management</h3>
              <p className="text-xs text-muted-foreground mb-3">Review student applications</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/collaborator/applications">Review</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Student Reports</h3>
              <p className="text-xs text-muted-foreground mb-3">Generate performance reports</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/collaborator/reports">Generate</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Chat</h3>
              <p className="text-xs text-muted-foreground mb-3">Communicate with students</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/collaborator/chat">Open Chat</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Active Opportunities */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Active Opportunities</h2>
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/dashboard/collaborator/opportunities">
              <Briefcase className="h-4 w-4 mr-1" /> View All
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">AI Research Internship</h3>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A 3-month internship focused on AI research and development with leading industry experts.
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Applications</span>
                <span className="text-primary">18 received</span>
              </div>
              <Progress value={60} className="h-1.5" indicatorClassName="bg-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Closes in 2 weeks</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/collaborator/opportunities/ai-research">View Details</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Data Science Workshop</h3>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A 2-week intensive workshop on data science fundamentals and practical applications.
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Applications</span>
                <span className="text-primary">24 received</span>
              </div>
              <Progress value={80} className="h-1.5" indicatorClassName="bg-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Closes in 3 days</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/collaborator/opportunities/data-science">View Details</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Web Development Bootcamp</h3>
              <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Filling Fast</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A 6-week bootcamp covering modern web development technologies and frameworks.
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Applications</span>
                <span className="text-yellow-500">32 received</span>
              </div>
              <Progress value={90} className="h-1.5" indicatorClassName="bg-yellow-500" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Closes tomorrow</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/collaborator/opportunities/web-dev">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Applications</h2>
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-4 border-b border-border flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">
                <span className="font-medium">John Doe</span> applied for{" "}
                <span className="font-medium">AI Research Internship</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-primary/20 text-foreground hover:bg-primary/10"
              asChild
            >
              <Link href="/dashboard/collaborator/applications">Review</Link>
            </Button>
          </div>

          <div className="p-4 border-b border-border flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/20 text-primary">EJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">
                <span className="font-medium">Emily Johnson</span> applied for{" "}
                <span className="font-medium">Data Science Workshop</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-primary/20 text-foreground hover:bg-primary/10"
              asChild
            >
              <Link href="/dashboard/collaborator/applications">Review</Link>
            </Button>
          </div>

          <div className="p-4 flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/20 text-primary">MC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">
                <span className="font-medium">Michael Chen</span> applied for{" "}
                <span className="font-medium">Web Development Bootcamp</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-primary/20 text-foreground hover:bg-primary/10"
              asChild
            >
              <Link href="/dashboard/collaborator/applications">Review</Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
