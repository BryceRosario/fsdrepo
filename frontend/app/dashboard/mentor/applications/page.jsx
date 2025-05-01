import { Search, Filter, CheckCircle, XCircle, Clock, Eye, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for applications
const applications = [
  {
    id: 1,
    student: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    position: "Web Development Intern",
    program: "Summer Internship Program",
    appliedDate: "May 10, 2023",
    status: "Pending Review",
    skills: ["JavaScript", "React", "Node.js"],
    education: "Computer Science, XYZ University",
    experience: "1 year freelance web development",
  },
  {
    id: 2,
    student: {
      name: "Samantha Lee",
      email: "samantha.lee@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    position: "Marketing Assistant",
    program: "Digital Marketing Training",
    appliedDate: "May 8, 2023",
    status: "Approved",
    skills: ["Social Media", "Content Creation", "SEO"],
    education: "Marketing, ABC College",
    experience: "6 months social media management",
  },
  {
    id: 3,
    student: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    position: "Data Science Trainee",
    program: "Data Science Bootcamp",
    appliedDate: "May 12, 2023",
    status: "Pending Review",
    skills: ["Python", "Machine Learning", "SQL"],
    education: "Statistics, DEF University",
    experience: "Research assistant for 1 year",
  },
  {
    id: 4,
    student: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    position: "UX/UI Design Intern",
    program: "Design Internship",
    appliedDate: "May 5, 2023",
    status: "Rejected",
    skills: ["Figma", "UI Design", "Prototyping"],
    education: "Graphic Design, GHI Institute",
    experience: "Freelance UI designer",
  },
  {
    id: 5,
    student: {
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    position: "Business Development Trainee",
    program: "Business Leadership Program",
    appliedDate: "May 15, 2023",
    status: "Pending Review",
    skills: ["Sales", "Negotiation", "Market Research"],
    education: "Business Administration, JKL University",
    experience: "Retail sales associate for 2 years",
  },
]

// Helper function to get status badge variant
const getStatusVariant = (status) => {
  switch (status) {
    case "Approved":
      return "success"
    case "Rejected":
      return "destructive"
    case "Pending Review":
      return "secondary"
    default:
      return "outline"
  }
}

// Helper function to get status icon
const StatusIcon = ({ status }) => {
  switch (status) {
    case "Approved":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "Rejected":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "Pending Review":
      return <Clock className="h-4 w-4 text-yellow-500" />
    default:
      return null
  }
}

export default function ApplicationsReviewPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Application Review</h1>
        <p className="text-muted-foreground">
          Efficiently review, approve, or reject student applications for programs.
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
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((app) => app.status === "Pending Review").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              {applications.filter((app) => app.status === "Approved").length}
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

      {/* Search and Filter Section */}
      <div className="mb-8 bg-card/50 p-4 rounded-lg border border-border">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search applications by student name, position, or program..."
                className="w-full bg-background pl-8"
              />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Programs</option>
              <option value="web-dev">Web Development</option>
              <option value="marketing">Digital Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="design">UX/UI Design</option>
              <option value="business">Business Leadership</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {applications
            .filter((app) => app.status === "Pending Review")
            .map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {applications
            .filter((app) => app.status === "Approved")
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
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={application.student.avatar || "/placeholder.svg"} alt={application.student.name} />
              <AvatarFallback>{application.student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{application.student.name}</CardTitle>
              <p className="text-sm font-medium text-muted-foreground">{application.student.email}</p>
            </div>
          </div>
          <Badge variant={getStatusVariant(application.status)} className="flex items-center gap-1">
            <StatusIcon status={application.status} />
            {application.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div>
                <span className="text-muted-foreground">Position:</span>
                <span className="ml-1 font-medium">{application.position}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Program:</span>
                <span className="ml-1 font-medium">{application.program}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Applied Date:</span>
                <span className="ml-1 font-medium">{application.appliedDate}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-muted-foreground">Education:</span>
                <span className="ml-1 font-medium">{application.education}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Experience:</span>
                <span className="ml-1 font-medium">{application.experience}</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Skills:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {application.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-primary/5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1">
          <Eye className="h-4 w-4" /> View Full Application
        </Button>
        <div className="flex gap-2">
          {application.status === "Pending Review" && (
            <>
              <Button variant="outline" size="sm" className="gap-1 text-red-500 hover:text-red-600">
                <ThumbsDown className="h-4 w-4" /> Reject
              </Button>
              <Button size="sm" className="gap-1 bg-green-500 hover:bg-green-600">
                <ThumbsUp className="h-4 w-4" /> Approve
              </Button>
            </>
          )}
          {application.status !== "Pending Review" && (
            <Button variant="outline" size="sm" className="gap-1">
              <Clock className="h-4 w-4" /> Revert to Pending
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
