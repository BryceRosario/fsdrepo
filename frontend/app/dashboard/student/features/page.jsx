import { ArrowRight, BookOpen, BadgeIcon as Certificate, MessageSquare, Briefcase, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import DashboardLayout from "../../layout"

export default function StudentFeaturesPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Student Features</h1>
        <p className="text-muted-foreground">Explore all the tools and resources available to you as a student.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Opportunities */}
        <Card className="flex flex-col">
          <CardHeader>
            <Briefcase className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Opportunities</CardTitle>
            <CardDescription>Browse and apply for internships, projects, and job opportunities.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Search opportunities by industry, location, or role</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Filter by requirements and qualifications</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Save favorite opportunities for later</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/student/opportunities">
                Explore Opportunities <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Application Tracking */}
        <Card className="flex flex-col">
          <CardHeader>
            <BookOpen className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Application Tracking</CardTitle>
            <CardDescription>Track the status of your applications and follow up on opportunities.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>View all your submitted applications</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Check application status in real-time</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Receive notifications about application updates</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/student/applications">
                Track Applications <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Certificates */}
        <Card className="flex flex-col">
          <CardHeader>
            <Certificate className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Certificates</CardTitle>
            <CardDescription>View and download your earned certificates and credentials.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Access all your earned certificates</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Download certificates in various formats</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Share certificates on social media or with employers</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/student/certificates">
                View Certificates <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Mentor Assignments */}
        <Card className="flex flex-col">
          <CardHeader>
            <MessageSquare className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Mentor Assignments</CardTitle>
            <CardDescription>Connect with your assigned mentors and schedule sessions.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>View your assigned mentors and their profiles</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Schedule mentoring sessions and meetings</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Message mentors directly through the platform</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/student/mentors">
                Connect with Mentors <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Feedback */}
        <Card className="flex flex-col">
          <CardHeader>
            <MessageSquare className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Feedback</CardTitle>
            <CardDescription>View feedback from mentors and track your progress.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Access detailed feedback from mentors</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Review performance evaluations</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Respond to feedback and set improvement goals</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/student/feedback">
                View Feedback <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Skill Progress */}
        <Card className="flex flex-col">
          <CardHeader>
            <LineChart className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Skill Progress</CardTitle>
            <CardDescription>Track your skill development and identify areas for improvement.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>View your skill development over time</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Identify strengths and areas for improvement</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Set personal development goals</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/student/skills">
                Track Progress <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}
