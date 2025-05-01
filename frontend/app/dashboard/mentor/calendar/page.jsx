import { Calendar, Clock, Plus, User, Video, MessageSquare, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for scheduled sessions
const scheduledSessions = [
  {
    id: 1,
    title: "Web Development Mentoring",
    student: "Alex Johnson",
    date: "May 25, 2023",
    time: "4:00 PM - 5:00 PM",
    type: "One-on-One",
    mode: "Video Call",
    status: "Upcoming",
    notes: "Review progress on React project and discuss next steps.",
  },
  {
    id: 2,
    title: "Marketing Strategy Session",
    student: "Samantha Lee",
    date: "May 26, 2023",
    time: "2:00 PM - 3:00 PM",
    type: "One-on-One",
    mode: "Video Call",
    status: "Upcoming",
    notes: "Discuss social media campaign results and plan next campaign.",
  },
  {
    id: 3,
    title: "Data Science Workshop",
    student: "Group Session",
    date: "May 27, 2023",
    time: "3:00 PM - 5:00 PM",
    type: "Group",
    mode: "Video Call",
    status: "Upcoming",
    notes: "Introduction to machine learning algorithms and practical exercises.",
  },
  {
    id: 4,
    title: "UX/UI Design Review",
    student: "Emily Rodriguez",
    date: "May 28, 2023",
    time: "1:00 PM - 2:00 PM",
    type: "One-on-One",
    mode: "In-Person",
    status: "Upcoming",
    notes: "Review portfolio designs and provide feedback.",
  },
  {
    id: 5,
    title: "Business Development Strategy",
    student: "David Wilson",
    date: "May 29, 2023",
    time: "11:00 AM - 12:00 PM",
    type: "One-on-One",
    mode: "Video Call",
    status: "Upcoming",
    notes: "Discuss market research findings and develop business strategy.",
  },
  {
    id: 6,
    title: "Web Development Code Review",
    student: "Alex Johnson",
    date: "May 20, 2023",
    time: "4:00 PM - 5:00 PM",
    type: "One-on-One",
    mode: "Video Call",
    status: "Completed",
    notes: "Reviewed JavaScript fundamentals and assigned new exercises.",
  },
  {
    id: 7,
    title: "Marketing Fundamentals",
    student: "Group Session",
    date: "May 18, 2023",
    time: "2:00 PM - 4:00 PM",
    type: "Group",
    mode: "Video Call",
    status: "Completed",
    notes: "Covered digital marketing basics and content strategy.",
  },
]

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Session Scheduling</h1>
        <p className="text-muted-foreground">Create and manage your training and mentoring calendar with ease.</p>
      </div>

      {/* Session Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledSessions.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {scheduledSessions.filter((session) => session.status === "Upcoming").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {scheduledSessions.filter((session) => session.status === "Completed").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
      </div>

      {/* Create Session Button */}
      <div className="mb-6 flex justify-end">
        <Button className="gap-1">
          <Plus className="h-4 w-4" /> Schedule New Session
        </Button>
      </div>

      {/* Sessions Tabs */}
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {scheduledSessions
            .filter((session) => session.status === "Upcoming")
            .map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {scheduledSessions
            .filter((session) => session.status === "Completed")
            .map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Calendar view will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Session Card Component
function SessionCard({ session }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{session.title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="mr-1 h-4 w-4" />
              <span>With: {session.student}</span>
            </div>
          </div>
          <Badge variant={session.status === "Upcoming" ? "default" : "secondary"} className="flex items-center gap-1">
            {session.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Date:</span>
                <span className="ml-1 font-medium">{session.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Time:</span>
                <span className="ml-1 font-medium">{session.time}</span>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="bg-primary/5">
                  {session.type}
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Video className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Mode:</span>
                <span className="ml-1 font-medium">{session.mode}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Notes:</span>
                <p className="mt-1 text-sm">{session.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Edit className="h-4 w-4" /> Edit
          </Button>
          <Button variant="outline" size="sm" className="gap-1 text-red-500 hover:text-red-600">
            <Trash2 className="h-4 w-4" /> Cancel
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <MessageSquare className="h-4 w-4" /> Message
          </Button>
          <Button size="sm" className="gap-1">
            <Video className="h-4 w-4" /> Join Session
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
