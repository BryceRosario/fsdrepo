import { Search, Filter, CheckCircle, Clock, BarChart, TrendingUp, User, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for student progress
const studentProgress = [
  {
    id: 1,
    student: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Web Development Internship",
    startDate: "May 10, 2023",
    endDate: "August 10, 2023",
    overallProgress: 65,
    attendance: 90,
    milestones: [
      { name: "HTML/CSS Fundamentals", status: "Completed", progress: 100 },
      { name: "JavaScript Basics", status: "Completed", progress: 100 },
      { name: "React Introduction", status: "In Progress", progress: 60 },
      { name: "Backend Integration", status: "Not Started", progress: 0 },
      { name: "Final Project", status: "Not Started", progress: 0 },
    ],
    lastActivity: "May 22, 2023",
  },
  {
    id: 2,
    student: {
      name: "Samantha Lee",
      email: "samantha.lee@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Marketing Assistant Training",
    startDate: "April 15, 2023",
    endDate: "July 15, 2023",
    overallProgress: 45,
    attendance: 85,
    milestones: [
      { name: "Marketing Fundamentals", status: "Completed", progress: 100 },
      { name: "Social Media Strategies", status: "Completed", progress: 100 },
      { name: "Content Creation", status: "In Progress", progress: 40 },
      { name: "Analytics & Reporting", status: "Not Started", progress: 0 },
      { name: "Campaign Management", status: "Not Started", progress: 0 },
    ],
    lastActivity: "May 20, 2023",
  },
  {
    id: 3,
    student: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Data Science Bootcamp",
    startDate: "May 5, 2023",
    endDate: "August 5, 2023",
    overallProgress: 30,
    attendance: 95,
    milestones: [
      { name: "Python Basics", status: "Completed", progress: 100 },
      { name: "Data Analysis", status: "In Progress", progress: 70 },
      { name: "Machine Learning Intro", status: "Not Started", progress: 0 },
      { name: "Advanced Algorithms", status: "Not Started", progress: 0 },
      { name: "Capstone Project", status: "Not Started", progress: 0 },
    ],
    lastActivity: "May 21, 2023",
  },
  {
    id: 4,
    student: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "UX/UI Design Internship",
    startDate: "April 20, 2023",
    endDate: "July 20, 2023",
    overallProgress: 50,
    attendance: 80,
    milestones: [
      { name: "Design Principles", status: "Completed", progress: 100 },
      { name: "User Research", status: "Completed", progress: 100 },
      { name: "Wireframing", status: "In Progress", progress: 75 },
      { name: "Prototyping", status: "Not Started", progress: 0 },
      { name: "User Testing", status: "Not Started", progress: 0 },
    ],
    lastActivity: "May 19, 2023",
  },
  {
    id: 5,
    student: {
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Business Development Training",
    startDate: "May 1, 2023",
    endDate: "August 1, 2023",
    overallProgress: 40,
    attendance: 85,
    milestones: [
      { name: "Business Fundamentals", status: "Completed", progress: 100 },
      { name: "Market Research", status: "Completed", progress: 100 },
      { name: "Sales Strategies", status: "In Progress", progress: 50 },
      { name: "Negotiation Skills", status: "Not Started", progress: 0 },
      { name: "Business Plan Development", status: "Not Started", progress: 0 },
    ],
    lastActivity: "May 18, 2023",
  },
]

// Helper function to get status badge variant
const getStatusVariant = (status) => {
  switch (status) {
    case "Completed":
      return "success"
    case "In Progress":
      return "default"
    case "Not Started":
      return "secondary"
    default:
      return "outline"
  }
}

// Helper function to get status icon
const StatusIcon = ({ status }) => {
  switch (status) {
    case "Completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "In Progress":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "Not Started":
      return <Clock className="h-4 w-4 text-gray-400" />
    default:
      return null
  }
}

export default function ProgressTrackingPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Progress Tracking</h1>
        <p className="text-muted-foreground">
          Monitor student attendance and track their progress throughout the program.
        </p>
      </div>

      {/* Progress Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentProgress.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold">
              {Math.round(
                studentProgress.reduce((sum, student) => sum + student.overallProgress, 0) / studentProgress.length,
              )}
              %
            </div>
            <Progress
              value={
                studentProgress.reduce((sum, student) => sum + student.overallProgress, 0) / studentProgress.length
              }
              className="h-2"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold">
              {Math.round(
                studentProgress.reduce((sum, student) => sum + student.attendance, 0) / studentProgress.length,
              )}
              %
            </div>
            <Progress
              value={studentProgress.reduce((sum, student) => sum + student.attendance, 0) / studentProgress.length}
              className="h-2"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studentProgress.reduce(
                (sum, student) =>
                  sum + student.milestones.filter((milestone) => milestone.status === "Completed").length,
                0,
              )}
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
                placeholder="Search students by name, email, or program..."
                className="w-full bg-background pl-8"
              />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Programs</option>
              <option value="web-dev">Web Development</option>
              <option value="marketing">Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="design">UX/UI Design</option>
              <option value="business">Business Development</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Tabs */}
      <Tabs defaultValue="students" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="students">Student Progress</TabsTrigger>
          <TabsTrigger value="milestones">Milestone Tracking</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-4">
          {studentProgress.map((student) => (
            <StudentProgressCard key={student.id} student={student} />
          ))}
        </TabsContent>

        <TabsContent value="milestones">
          <Card>
            <CardHeader>
              <CardTitle>Milestone Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Milestone tracking view will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Progress Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Analytics dashboard will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Student Progress Card Component
function StudentProgressCard({ student }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={student.student.avatar || "/placeholder.svg"} alt={student.student.name} />
              <AvatarFallback>{student.student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{student.student.name}</CardTitle>
              <p className="text-sm font-medium text-muted-foreground">{student.program}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">Overall Progress</div>
            <div className="flex items-center justify-end">
              <Progress value={student.overallProgress} className="h-2 w-24 mr-2" />
              <span className="text-sm font-bold">{student.overallProgress}%</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Program Period:</span>
                <span className="ml-1 font-medium">
                  {student.startDate} - {student.endDate}
                </span>
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Attendance:</span>
                <span className="ml-1 font-medium">{student.attendance}%</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Last Activity:</span>
                <span className="ml-1 font-medium">{student.lastActivity}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Milestones</h4>
            <div className="space-y-2">
              {student.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StatusIcon status={milestone.status} />
                    <span className="ml-2 text-sm">{milestone.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Progress value={milestone.progress} className="h-2 w-16 mr-2" />
                    <Badge variant={getStatusVariant(milestone.status)}>{milestone.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1">
          <BarChart className="h-4 w-4" /> Detailed Report
        </Button>
        <Button size="sm" className="gap-1">
          <TrendingUp className="h-4 w-4" /> Update Progress
        </Button>
      </CardFooter>
    </Card>
  )
}
