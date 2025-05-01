import {
  BarChart,
  Calendar,
  Users,
  Lightbulb,
  Zap,
  Plus,
  BookOpen,
  FileCheck,
  Award,
  MessageSquare,
  Briefcase,
  FileText,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import DashboardLayout from "../layout"
import Link from "next/link"

export default function OverviewPage() {
  return (
    <DashboardLayout activeTab="overview">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Welcome back, John</h1>
        <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Total Projects</p>
              <h3 className="text-2xl font-bold mt-1">12</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+2 new</span>
            <span className="text-muted-foreground ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Ideas Generated</p>
              <h3 className="text-2xl font-bold mt-1">247</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <Zap className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+24%</span>
            <span className="text-muted-foreground ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Team Members</p>
              <h3 className="text-2xl font-bold mt-1">8</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <Users className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+1 new</span>
            <span className="text-muted-foreground ml-2">team member</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <h3 className="text-2xl font-bold mt-1">89%</h3>
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
          {/* Student Features */}
          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Browse Opportunities</h3>
              <p className="text-xs text-muted-foreground mb-3">Find internships and training programs</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/opportunities">Browse</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Application Tracking</h3>
              <p className="text-xs text-muted-foreground mb-3">Track your application status</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/applications">Track</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Certificates</h3>
              <p className="text-xs text-muted-foreground mb-3">View and download your certificates</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/certificates">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Chat</h3>
              <p className="text-xs text-muted-foreground mb-3">Communicate with mentors and team</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/chat">Open Chat</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Mentor Features */}
          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Student Management</h3>
              <p className="text-xs text-muted-foreground mb-3">Manage your assigned students</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/students">Manage</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Session Scheduling</h3>
              <p className="text-xs text-muted-foreground mb-3">Schedule training and mentoring</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/calendar">Schedule</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Collaborator Features */}
          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Post Opportunities</h3>
              <p className="text-xs text-muted-foreground mb-3">Create internships and programs</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/opportunities/create">Create</Link>
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
                <Link href="/dashboard/reports">Generate</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Active Projects */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Active Projects</h2>
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/dashboard/projects">
              <Plus className="h-4 w-4" /> New Project
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">AI-Powered Resource Allocation System</h3>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              An intelligent system that optimizes resource distribution based on real-time needs and predictive
              analytics.
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span className="text-primary">65%</span>
              </div>
              <Progress value={65} className="h-1.5" indicatorClassName="bg-primary" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">SK</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">LM</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs text-muted-foreground">Due in 2 weeks</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/projects">View Details</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Decentralized Knowledge Sharing Platform</h3>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A blockchain-based platform that incentivizes experts to share knowledge and solutions.
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span className="text-primary">40%</span>
              </div>
              <Progress value={40} className="h-1.5" indicatorClassName="bg-primary" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">RK</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs text-muted-foreground">Due in 1 month</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/projects">View Details</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Adaptive Learning Environment</h3>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A personalized learning system that adapts to individual learning styles and pace.
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span className="text-primary">85%</span>
              </div>
              <Progress value={85} className="h-1.5" indicatorClassName="bg-primary" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">EM</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">TK</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs text-muted-foreground">Due in 3 days</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/projects">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-4 border-b border-border flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">New idea generated</span> for AI-Powered Resource Allocation System
              </p>
              <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
            </div>
          </div>

          <div className="p-4 border-b border-border flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Sarah Kim</span> joined the Adaptive Learning Environment project
              </p>
              <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
            </div>
          </div>

          <div className="p-4 border-b border-border flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <BarChart className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Project milestone reached</span> for Decentralized Knowledge Sharing
                Platform
              </p>
              <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
            </div>
          </div>

          <div className="p-4 flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Team meeting scheduled</span> for AI-Powered Resource Allocation System
              </p>
              <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
