import { Lightbulb, Plus, Search, Filter, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import DashboardLayout from "../layout"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <DashboardLayout activeTab="projects">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Projects</h1>
          <p className="text-muted-foreground">Manage and track all your ongoing projects</p>
        </div>
        <Button className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <Link href="/dashboard/projects/new">
            <Plus className="h-4 w-4" /> New Project
          </Link>
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-9 bg-background" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="border-border">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="border-border gap-1">
            <ArrowUpDown className="h-3.5 w-3.5" /> Sort
          </Button>
          <Button variant="outline" size="sm" className="border-border">
            All Projects
          </Button>
        </div>
      </div>

      {/* Project Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Active Projects</span>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">5</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Projects currently in progress</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Completed</span>
              <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">7</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Successfully completed projects</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Draft</span>
              <Badge className="bg-muted/20 text-muted-foreground hover:bg-muted/30">3</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Projects in planning phase</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">All Projects</h2>

        <div className="space-y-4">
          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-md">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">AI-Powered Resource Allocation System</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      An intelligent system that optimizes resource distribution based on real-time needs.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">AI</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Analytics</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Optimization</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
                  <div className="text-sm text-muted-foreground">Due in 2 weeks</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span className="text-primary">65%</span>
                </div>
                <Progress value={65} className="h-1.5" indicatorClassName="bg-primary" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">SK</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">LM</AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-foreground hover:bg-primary/10"
                  asChild
                >
                  <Link href="/dashboard/projects/details">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-md">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Decentralized Knowledge Sharing Platform</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      A blockchain-based platform that incentivizes experts to share knowledge and solutions.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Blockchain</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Knowledge Management</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
                  <div className="text-sm text-muted-foreground">Due in 1 month</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span className="text-primary">40%</span>
                </div>
                <Progress value={40} className="h-1.5" indicatorClassName="bg-primary" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">RK</AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-foreground hover:bg-primary/10"
                  asChild
                >
                  <Link href="/dashboard/projects/details">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-md">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Adaptive Learning Environment</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      A personalized learning system that adapts to individual learning styles and pace.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Education</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Machine Learning</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Personalization</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
                  <div className="text-sm text-muted-foreground">Due in 3 days</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span className="text-primary">85%</span>
                </div>
                <Progress value={85} className="h-1.5" indicatorClassName="bg-primary" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">EM</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">TK</AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-foreground hover:bg-primary/10"
                  asChild
                >
                  <Link href="/dashboard/projects/details">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
