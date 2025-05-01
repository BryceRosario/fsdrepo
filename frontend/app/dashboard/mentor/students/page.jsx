import { Search, Filter, Mail, Phone, Calendar, MessageSquare, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import DashboardLayout from "../../layout"

// Sample data for students
const students = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    program: "Web Development Internship",
    startDate: "May 10, 2023",
    endDate: "August 10, 2023",
    progress: 65,
    status: "Active",
    nextSession: "May 25, 2023 (4:00 PM)",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Samantha Lee",
    email: "samantha.lee@example.com",
    phone: "+1 (555) 987-6543",
    program: "Marketing Assistant Training",
    startDate: "April 15, 2023",
    endDate: "July 15, 2023",
    progress: 45,
    status: "Active",
    nextSession: "May 26, 2023 (2:00 PM)",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 456-7890",
    program: "Data Science Bootcamp",
    startDate: "May 5, 2023",
    endDate: "August 5, 2023",
    progress: 30,
    status: "Active",
    nextSession: "May 27, 2023 (3:00 PM)",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    phone: "+1 (555) 234-5678",
    program: "UX/UI Design Internship",
    startDate: "April 20, 2023",
    endDate: "July 20, 2023",
    progress: 50,
    status: "Active",
    nextSession: "May 28, 2023 (1:00 PM)",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 (555) 876-5432",
    program: "Business Development Training",
    startDate: "May 1, 2023",
    endDate: "August 1, 2023",
    progress: 40,
    status: "Active",
    nextSession: "May 29, 2023 (11:00 AM)",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function StudentsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Student Management</h1>
        <p className="text-muted-foreground">
          View and manage all your assigned students in one centralized dashboard.
        </p>
      </div>

      {/* Student Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.filter((student) => student.status === "Active").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold">
              {Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length)}%
            </div>
            <Progress
              value={students.reduce((sum, student) => sum + student.progress, 0) / students.length}
              className="h-2"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{students.length}</div>
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

      {/* Students List */}
      <div className="space-y-4">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </DashboardLayout>
  )
}

// Student Card Component
function StudentCard({ student }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <div className="flex justify-between">
              <CardTitle className="text-xl">{student.name}</CardTitle>
              <Badge variant="default">{student.status}</Badge>
            </div>
            <p className="text-sm font-medium text-muted-foreground">{student.program}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Email:</span>
                <span className="ml-1 font-medium">{student.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Phone:</span>
                <span className="ml-1 font-medium">{student.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Program Period:</span>
                <span className="ml-1 font-medium">
                  {student.startDate} - {student.endDate}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Next Session:</span>
                <span className="ml-1 font-medium">{student.nextSession}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress:</span>
                  <span className="font-medium">{student.progress}%</span>
                </div>
                <Progress value={student.progress} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <FileText className="h-4 w-4" /> View Profile
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Calendar className="h-4 w-4" /> Schedule
          </Button>
        </div>
        <Button size="sm" className="gap-1">
          <MessageSquare className="h-4 w-4" /> Message
        </Button>
      </CardFooter>
    </Card>
  )
}
