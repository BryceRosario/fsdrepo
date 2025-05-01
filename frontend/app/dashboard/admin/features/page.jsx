import { Users, CheckCircle, FolderPlus, BarChart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import DashboardLayout from "../../layout"

export default function AdminFeaturesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Admin Features</h1>
        <p className="text-muted-foreground">Powerful tools to manage the platform, users, and content with ease.</p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">User Management</CardTitle>
            <CardDescription>Comprehensive tools to manage all users on the platform with ease.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Add, edit, or remove users</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Manage roles and permissions</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>User activity monitoring</span>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/dashboard/admin/users">Manage Users</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Collaborator Approvals</CardTitle>
            <CardDescription>Review and approve collaborator account requests from organizations.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Verification process management</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Organization profile review</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Approval/rejection notifications</span>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/dashboard/admin/approvals">Review Approvals</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderPlus className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Category Management</CardTitle>
            <CardDescription>
              Add or remove internship and training categories to organize opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Create custom categories</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Organize by industry or skill</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Manage category hierarchies</span>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/dashboard/admin/categories">Manage Categories</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">System Analytics</CardTitle>
            <CardDescription>View comprehensive analytics about platform usage and performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>User engagement metrics</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Application and completion rates</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Performance and usage trends</span>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/dashboard/admin/analytics">View Analytics</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Announcements</CardTitle>
            <CardDescription>Create and send announcements and newsletters to platform users.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Targeted messaging by user role</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Scheduled announcements</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                <span>Newsletter templates and analytics</span>
              </li>
            </ul>
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/dashboard/admin/announcements">Manage Announcements</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-primary/10 p-8 rounded-lg">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            Ready to <span className="text-primary">manage</span> the platform?
          </h2>
          <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Access powerful admin tools to ensure the platform runs smoothly and efficiently.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/dashboard/admin/users">Manage Users</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/20 text-foreground hover:bg-primary/10"
            >
              <Link href="/dashboard/admin/analytics">View Analytics</Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
