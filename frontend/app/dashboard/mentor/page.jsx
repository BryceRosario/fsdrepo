import Link from "next/link"
import { Users, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "../layout"

export default function MentorDashboard() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Mentor Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your mentoring activities and assigned students.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/mentor/students" className="text-xs text-primary">
              View all students
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/mentor/applications" className="text-xs text-primary">
              Review applications
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/mentor/calendar" className="text-xs text-primary">
              View calendar
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/mentor/resources" className="text-xs text-primary">
              Manage resources
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Student Management</CardTitle>
            <CardDescription>View and manage all your assigned students in one centralized dashboard.</CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button className="w-full" asChild>
              <Link href="/dashboard/mentor/students">Manage Students</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Session Scheduling</CardTitle>
            <CardDescription>Create and manage your training and mentoring calendar with ease.</CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button className="w-full" asChild>
              <Link href="/dashboard/mentor/calendar">Manage Calendar</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Feedback & Evaluation</CardTitle>
            <CardDescription>Provide structured feedback and evaluations to help students improve.</CardDescription>
          </CardHeader>
          <CardFooter className="pt-2">
            <Button className="w-full" asChild>
              <Link href="/dashboard/mentor/evaluations">Provide Feedback</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* View All Features Button */}
      <div className="mt-8 text-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/dashboard/mentor/features">View All Mentor Features</Link>
        </Button>
      </div>
    </DashboardLayout>
  )
}
