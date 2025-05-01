import { ArrowRight, Users, Calendar, ClipboardCheck, MessageSquare, BookOpen, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import DashboardLayout from "../../layout"

export default function MentorFeaturesPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mentor Features</h1>
        <p className="text-muted-foreground">Explore all the tools and resources available to you as a mentor.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Student Management */}
        <Card className="flex flex-col">
          <CardHeader>
            <Users className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Student Management</CardTitle>
            <CardDescription>Manage your assigned students and track their progress.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>View all your assigned students and their profiles</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Monitor student progress and engagement</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Access student work and submissions</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/mentor/students">
                Manage Students <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Application Review */}
        <Card className="flex flex-col">
          <CardHeader>
            <ClipboardCheck className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Application Review</CardTitle>
            <CardDescription>Review and evaluate student applications for programs and opportunities.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Review student applications and materials</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Provide feedback and recommendations</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Collaborate with other reviewers</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/mentor/applications">
                Review Applications <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Session Scheduling */}
        <Card className="flex flex-col">
          <CardHeader>
            <Calendar className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Session Scheduling</CardTitle>
            <CardDescription>Schedule and manage mentoring sessions with your students.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Set your availability for mentoring sessions</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Schedule one-on-one or group sessions</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Receive notifications and reminders</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/mentor/calendar">
                Manage Schedule <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Feedback and Evaluation */}
        <Card className="flex flex-col">
          <CardHeader>
            <MessageSquare className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Feedback & Evaluation</CardTitle>
            <CardDescription>Provide structured feedback and evaluations to help students improve.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Create detailed performance evaluations</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Provide constructive feedback on student work</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Track student improvement over time</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/mentor/evaluations">
                Provide Feedback <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Resource Management */}
        <Card className="flex flex-col">
          <CardHeader>
            <BookOpen className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Resource Management</CardTitle>
            <CardDescription>Create and share learning resources with your students.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Upload and organize learning materials</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Create custom resource collections</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Share resources with individual students or groups</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/mentor/resources">
                Manage Resources <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Progress Tracking */}
        <Card className="flex flex-col">
          <CardHeader>
            <LineChart className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Progress Tracking</CardTitle>
            <CardDescription>Monitor student progress and identify areas for improvement.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Track student skill development over time</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Identify strengths and areas for improvement</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Generate progress reports for students</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/mentor/progress">
                Track Progress <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}
