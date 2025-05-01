import { Search, Filter, Download, Eye, CheckCircle, XCircle, Clock } from "lucide-react"
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
    opportunity: "Web Development Internship",
    appliedDate: "May 20, 2023",
    status: "Under Review",
    skills: ["JavaScript", "React", "Node.js"],
    education: "Computer Science, Stanford University",
    experience: "1 year freelance web development",
  },
  {
    id: 2,
    student: {
      name: "Samantha Lee",
      email: "samantha.lee@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    opportunity: "Marketing Assistant",
    appliedDate: "May 18, 2023",
    status: "Accepted",
    skills: ["Social Media", "Content Creation", "SEO"],
    education: "Marketing, UCLA",
    experience: "6 months marketing internship",
  },
  {
    id: 3,
    student: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    opportunity: "Data Science Intern",
    appliedDate: "May 15, 2023",
    status: "Rejected",
    skills: ["Python", "Machine Learning", "SQL"],
    education: "Statistics, MIT",
    experience: "Research assistant in data analytics",
  },
  {
    id: 4,
    student: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    opportunity: "UX/UI Design Intern",
    appliedDate: "May 10, 2023",
    status: "Under Review",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    education: "Design, RISD",
    experience: "Freelance UI designer",
  },
  {
    id: 5,
    student: {
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    opportunity: "Business Development Intern",
    appliedDate: "May 5, 2023",
    status: "Accepted",
    skills: ["Sales", "Market Research", "CRM"],
    education: "Business Administration, NYU",
    experience: "Sales associate at retail store",
  },
]

export default function ApplicationsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Application Management</h1>
        <p className="text-muted-foreground">Review and manage student applications for your opportunities.</p>
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
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((app) => app.status === "Under Review").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Accepted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.filter((app) => app.status === "Accepted").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.filter((app) => app.status === "Rejected").length}</div>
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
                placeholder="Search applications by student name or opportunity..."
                className="w-full bg-background pl-8"
              />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Opportunities</option>
              <option value="web-dev">Web Development</option>
              <option value="marketing">Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="design">UX/UI Design</option>
              <option value="business">Business Development</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" /> Export Applications
            </Button>
          </div>
        </div>
      </div>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="review">Under Review</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="review" className="space-y-4">
          {applications
            .filter((app) => app.status === "Under Review")
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
  const getStatusIcon = (status) => {
    switch (status) {
      case "Accepted":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "Under Review":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      case "Under Review":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
              <p className="text-sm font-medium text-muted-foreground">{application.opportunity}</p>
            </div>
          </div>
          <Badge className={`flex items-center gap-1 ${getStatusColor(application.status)}`}>
            {getStatusIcon(application.status)} {application.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm">{application.student.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Applied</p>
              <p className="text-sm">{application.appliedDate}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-1">Skills</p>
            <div className="flex flex-wrap gap-1">
              {application.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-primary/10">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Education</p>
              <p className="text-sm">{application.education}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Experience</p>
              <p className="text-sm">{application.experience}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1">
          <Eye className="h-4 w-4" /> View Full Application
        </Button>

        {application.status === "Under Review" ? (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="gap-1 text-green-600 hover:text-green-700">
              <CheckCircle className="h-4 w-4" /> Accept
            </Button>
            <Button size="sm" variant="outline" className="gap-1 text-red-600 hover:text-red-700">
              <XCircle className="h-4 w-4" /> Reject
            </Button>
          </div>
        ) : (
          <Button size="sm" variant="outline" className="gap-1">
            Change Status
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
