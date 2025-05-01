import { Clock, CheckCircle, XCircle, AlertCircle, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import DashboardLayout from "../../layout"

// Sample data for applications
const applications = [
  {
    id: 1,
    position: "Software Development Intern",
    company: "TechCorp Solutions",
    appliedDate: "May 10, 2023",
    status: "In Review",
    progress: 50,
    nextStep: "Technical Interview",
    notes: "Your application has been reviewed and you've been shortlisted for a technical interview.",
  },
  {
    id: 2,
    position: "Marketing Assistant",
    company: "Global Marketing Inc.",
    appliedDate: "April 25, 2023",
    status: "Accepted",
    progress: 100,
    nextStep: "Onboarding",
    notes: "Congratulations! Your application has been accepted. Please check your email for onboarding details.",
  },
  {
    id: 3,
    position: "Data Science Trainee",
    company: "DataInsights",
    appliedDate: "May 5, 2023",
    status: "Pending",
    progress: 25,
    nextStep: "Initial Review",
    notes: "Your application is currently being reviewed by the hiring team.",
  },
  {
    id: 4,
    position: "UX/UI Design Intern",
    company: "Creative Solutions",
    appliedDate: "May 15, 2023",
    status: "Rejected",
    progress: 100,
    nextStep: "None",
    notes: "Thank you for your interest. Unfortunately, we've decided to move forward with other candidates.",
  },
  {
    id: 5,
    position: "Business Development Trainee",
    company: "Growth Partners",
    appliedDate: "May 1, 2023",
    status: "Interview Scheduled",
    progress: 75,
    nextStep: "Final Interview",
    notes: "Your interview is scheduled for May 25, 2023 at 2:00 PM. Please check your email for details.",
  },
]

// Helper function to get status badge variant
const getStatusVariant = (status) => {
  switch (status) {
    case "Accepted":
      return "success"
    case "Rejected":
      return "destructive"
    case "In Review":
    case "Interview Scheduled":
      return "default"
    case "Pending":
      return "secondary"
    default:
      return "outline"
  }
}

// Helper function to get status icon
const StatusIcon = ({ status }) => {
  switch (status) {
    case "Accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "Rejected":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "In Review":
    case "Interview Scheduled":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "Pending":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />
    default:
      return null
  }
}

export default function ApplicationsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Application Tracking</h1>
        <p className="text-muted-foreground">
          Track the status of your applications and stay updated on your progress.
        </p>
      </div>

      {/* Application Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((app) => app.status !== "Accepted" && app.status !== "Rejected").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Accepted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              {applications.filter((app) => app.status === "Accepted").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {applications.filter((app) => app.status === "Rejected").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {applications
            .filter((app) => app.status !== "Accepted" && app.status !== "Rejected")
            .map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4">
          {applications
            .filter((app) => app.status === "Accepted")
            .map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {applications
            .filter((app) => app.status === "Rejected")
            .map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Application Card Component
function ApplicationCard({ application }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{application.position}</CardTitle>
            <p className="text-sm font-medium text-muted-foreground">{application.company}</p>
          </div>
          <Badge
            variant={
              application.status === "Accepted"
                ? "success"
                : application.status === "Rejected"
                  ? "destructive"
                  : "default"
            }
            className="flex items-center gap-1"
          >
            <StatusIcon status={application.status} />
            {application.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Applied on: {application.appliedDate}</span>
            <span className="font-medium">Next: {application.nextStep}</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Application Progress</span>
              <span>{application.progress}%</span>
            </div>
            <Progress value={application.progress} className="h-2" />
          </div>
          <p className="text-sm mt-2">{application.notes}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        {application.status !== "Rejected" && (
          <Button size="sm" className="gap-1">
            Follow Up <ArrowUpRight className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
