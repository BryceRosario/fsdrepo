import Link from "next/link"
import { BookOpen, FileCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "../layout"

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Student Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your learning journey and available resources.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/student/applications" className="text-xs text-primary">
              View all applications
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/student/certificates" className="text-xs text-primary">
              View all certificates
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/student/mentors" className="text-xs text-primary">
              View all mentors
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Skill Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/student/skills" className="text-xs text-primary">
              View skill progress
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Browse Opportunities</CardTitle>
            <CardDescription>
              Explore available internships and training programs tailored to your interests.
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button className="w-full" asChild>
              <Link href="/dashboard/student/opportunities">Browse Now</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Track Applications</CardTitle>
            <CardDescription>
              Monitor the status of your applications and stay updated on your progress.
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button className="w-full" asChild>
              <Link href="/dashboard/student/applications">Track Now</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Connect with Mentors</CardTitle>
            <CardDescription>
              Schedule sessions with your assigned mentors and get guidance on your learning journey.
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button className="w-full" asChild>
              <Link href="/dashboard/student/mentors">Connect Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* View All Features Button */}
      <div className="mt-8 text-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/dashboard/student/features">View All Student Features</Link>
        </Button>
      </div>
    </DashboardLayout>
  )
}
