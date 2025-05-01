import { Search, Filter, Download, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for selection processes
const selectionProcesses = [
  {
    id: 1,
    title: "Web Development Internship - Summer 2023",
    status: "In Progress",
    progress: 75,
    totalApplicants: 48,
    shortlisted: 12,
    accepted: 8,
    rejected: 30,
    pending: 10,
    deadline: "June 15, 2023",
    stages: [
      { name: "Application Review", status: "Completed", date: "May 25, 2023" },
      { name: "Technical Assessment", status: "Completed", date: "June 1, 2023" },
      { name: "Interview", status: "In Progress", date: "June 5-10, 2023" },
      { name: "Final Selection", status: "Pending", date: "June 15, 2023" },
    ],
    topCandidates: [
      {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Shortlisted",
        score: 92,
      },
      {
        name: "Samantha Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Shortlisted",
        score: 88,
      },
      {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Shortlisted",
        score: 85,
      },
    ],
  },
  {
    id: 2,
    title: "Marketing Assistant Program - Fall 2023",
    status: "Upcoming",
    progress: 0,
    totalApplicants: 0,
    shortlisted: 0,
    accepted: 0,
    rejected: 0,
    pending: 0,
    deadline: "August 30, 2023",
    stages: [
      { name: "Application Review", status: "Pending", date: "September 5-10, 2023" },
      { name: "Skills Assessment", status: "Pending", date: "September 15-20, 2023" },
      { name: "Interview", status: "Pending", date: "September 25-30, 2023" },
      { name: "Final Selection", status: "Pending", date: "October 5, 2023" },
    ],
    topCandidates: [],
  },
  {
    id: 3,
    title: "Data Science Bootcamp - Spring 2023",
    status: "Completed",
    progress: 100,
    totalApplicants: 65,
    shortlisted: 20,
    accepted: 15,
    rejected: 50,
    pending: 0,
    deadline: "February 28, 2023",
    stages: [
      { name: "Application Review", status: "Completed", date: "March 5, 2023" },
      { name: "Technical Assessment", status: "Completed", date: "March 15, 2023" },
      { name: "Interview", status: "Completed", date: "March 20-25, 2023" },
      { name: "Final Selection", status: "Completed", date: "April 1, 2023" },
    ],
    topCandidates: [
      {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Accepted",
        score: 95,
      },
      {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Accepted",
        score: 93,
      },
      {
        name: "Jessica Taylor",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Accepted",
        score: 90,
      },
    ],
  },
]

export default function SelectionProcessPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Selection Process</h1>
        <p className="text-muted-foreground">Manage and track your selection processes for different opportunities.</p>
      </div>

      {/* Selection Process Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Processes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectionProcesses.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {selectionProcesses.filter((process) => process.status === "In Progress").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {selectionProcesses.filter((process) => process.status === "Upcoming").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {selectionProcesses.filter((process) => process.status === "Completed").length}
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
                placeholder="Search selection processes by title..."
                className="w-full bg-background pl-8"
              />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Statuses</option>
              <option value="in-progress">In Progress</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" /> Export Report
            </Button>
          </div>
        </div>
      </div>

      {/* Selection Processes Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Processes</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {selectionProcesses.map((process) => (
            <SelectionProcessCard key={process.id} process={process} />
          ))}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-6">
          {selectionProcesses
            .filter((process) => process.status === "In Progress")
            .map((process) => (
              <SelectionProcessCard key={process.id} process={process} />
            ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          {selectionProcesses
            .filter((process) => process.status === "Upcoming")
            .map((process) => (
              <SelectionProcessCard key={process.id} process={process} />
            ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          {selectionProcesses
            .filter((process) => process.status === "Completed")
            .map((process) => (
              <SelectionProcessCard key={process.id} process={process} />
            ))}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Selection Process Card Component
function SelectionProcessCard({ process }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Upcoming":
        return "bg-purple-100 text-purple-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStageStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600"
      case "In Progress":
        return "text-blue-600"
      case "Pending":
        return "text-gray-400"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{process.title}</CardTitle>
            <p className="text-sm font-medium text-muted-foreground">Application Deadline: {process.deadline}</p>
          </div>
          <Badge className={`${getStatusColor(process.status)}`}>{process.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">{process.progress}%</span>
            </div>
            <Progress value={process.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background p-3 rounded-lg border border-border">
              <div className="text-sm font-medium text-muted-foreground">Total Applicants</div>
              <div className="text-2xl font-bold">{process.totalApplicants}</div>
            </div>
            <div className="bg-background p-3 rounded-lg border border-border">
              <div className="text-sm font-medium text-muted-foreground">Shortlisted</div>
              <div className="text-2xl font-bold">{process.shortlisted}</div>
            </div>
            <div className="bg-background p-3 rounded-lg border border-border">
              <div className="text-sm font-medium text-muted-foreground">Accepted</div>
              <div className="text-2xl font-bold">{process.accepted}</div>
            </div>
            <div className="bg-background p-3 rounded-lg border border-border">
              <div className="text-sm font-medium text-muted-foreground">Rejected</div>
              <div className="text-2xl font-bold">{process.rejected}</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Selection Stages</h4>
            <div className="space-y-2">
              {process.stages.map((stage, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        stage.status === "Completed"
                          ? "bg-green-500"
                          : stage.status === "In Progress"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                      }`}
                    ></div>
                    <span className="text-sm">{stage.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${getStageStatusColor(stage.status)}`}>{stage.status}</span>
                    <span className="text-xs text-muted-foreground">{stage.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {process.topCandidates.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Top Candidates</h4>
              <div className="space-y-2">
                {process.topCandidates.map((candidate, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-background p-2 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={candidate.avatar || "/placeholder.svg"} alt={candidate.name} />
                        <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{candidate.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium">Score: {candidate.score}/100</span>
                      <Badge variant="outline" className="bg-primary/10">
                        {candidate.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1">
          <Users className="h-4 w-4" /> View All Applicants
        </Button>
        <Button size="sm" className="gap-1">
          Manage Process <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
