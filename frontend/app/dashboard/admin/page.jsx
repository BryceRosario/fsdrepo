import { BarChart, Users, CheckCircle, FolderPlus, Bell, Settings } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import DashboardLayout from "../layout"
import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Welcome back, Admin</h1>
        <p className="text-muted-foreground">Here's what's happening with the platform today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <h3 className="text-2xl font-bold mt-1">1,248</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <Users className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+24</span>
            <span className="text-muted-foreground ml-2">this week</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Pending Approvals</p>
              <h3 className="text-2xl font-bold mt-1">12</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-yellow-500 flex items-center">5 urgent</span>
            <span className="text-muted-foreground ml-2">waiting &gt;48h</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Active Programs</p>
              <h3 className="text-2xl font-bold mt-1">32</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <FolderPlus className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">+3</span>
            <span className="text-muted-foreground ml-2">this month</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">System Health</p>
              <h3 className="text-2xl font-bold mt-1">98%</h3>
            </div>
            <div className="bg-primary/20 p-2 rounded-md">
              <BarChart className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-xs">
            <span className="text-green-500 flex items-center">All systems operational</span>
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
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">User Management</h3>
              <p className="text-xs text-muted-foreground mb-3">Manage platform users</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/admin/users">Manage</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Collaborator Approvals</h3>
              <p className="text-xs text-muted-foreground mb-3">Review organization requests</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/admin/approvals">Review</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <FolderPlus className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Categories</h3>
              <p className="text-xs text-muted-foreground mb-3">Manage opportunity categories</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/admin/categories">Manage</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Announcements</h3>
              <p className="text-xs text-muted-foreground mb-3">Create platform announcements</p>
              <Button className="w-full mt-auto" variant="outline" asChild>
                <Link href="/dashboard/admin/announcements">Create</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Pending Approvals</h2>
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/dashboard/admin/approvals">
              <CheckCircle className="h-4 w-4 mr-1" /> View All
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/20 text-primary">TC</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">TechCorp Solutions</h3>
                <p className="text-xs text-muted-foreground">Technology, Software Development</p>
              </div>
              <Badge className="ml-auto bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Urgent</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Requesting collaborator access to post internship opportunities in software development.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Submitted 3 days ago</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/admin/approvals/techcorp">Review</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/20 text-primary">BI</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">BioInnovate Labs</h3>
                <p className="text-xs text-muted-foreground">Biotechnology, Research</p>
              </div>
              <Badge className="ml-auto bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Urgent</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Requesting collaborator access to post research opportunities in biotechnology.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Submitted 2 days ago</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/admin/approvals/bioinnovate">Review</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/20 text-primary">GF</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">GreenFuture Energy</h3>
                <p className="text-xs text-muted-foreground">Renewable Energy, Sustainability</p>
              </div>
              <Badge className="ml-auto bg-primary/20 text-primary hover:bg-primary/30">New</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Requesting collaborator access to post internship opportunities in renewable energy.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Submitted today</span>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-foreground hover:bg-primary/10"
                asChild
              >
                <Link href="/dashboard/admin/approvals/greenfuture">Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* System Notifications */}
      <div>
        <h2 className="text-xl font-bold mb-4">System Notifications</h2>
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-4 border-b border-border flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Settings className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">System Update</span> - Scheduled maintenance tonight at 2:00 AM
              </p>
              <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-primary/20 text-foreground hover:bg-primary/10"
              asChild
            >
              <Link href="/dashboard/admin/system">Details</Link>
            </Button>
          </div>

          <div className="p-4 border-b border-border flex items-start gap-3">
            <div className="bg-yellow-500/20 p-2 rounded-full">
              <Bell className="h-4 w-4 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">High Traffic Alert</span> - Unusual traffic detected on the application
                portal
              </p>
              <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-primary/20 text-foreground hover:bg-primary/10"
              asChild
            >
              <Link href="/dashboard/admin/analytics">View Analytics</Link>
            </Button>
          </div>

          <div className="p-4 flex items-start gap-3">
            <div className="bg-green-500/20 p-2 rounded-full">
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Backup Completed</span> - Weekly system backup completed successfully
              </p>
              <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-primary/20 text-foreground hover:bg-primary/10"
              asChild
            >
              <Link href="/dashboard/admin/system">View Logs</Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
