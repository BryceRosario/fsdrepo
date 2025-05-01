import { Calendar, MessageSquare, Video, Clock, Star, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import DashboardLayout from "../../layout"

// Sample data for mentors
const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Software Engineer",
    company: "TechCorp Solutions",
    expertise: ["Web Development", "React", "Node.js", "System Architecture"],
    bio: "Over 10 years of experience in software development with a focus on web technologies and system architecture.",
    availability: "Mon, Wed, Fri (4-6 PM)",
    rating: 4.9,
    reviews: 27,
    nextSession: "May 25, 2023 (4:00 PM)",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Marketing Inc.",
    expertise: ["Digital Marketing", "Brand Strategy", "Content Marketing", "SEO"],
    bio: "Marketing professional with expertise in digital strategies and brand development for tech companies.",
    availability: "Tue, Thu (3-5 PM)",
    rating: 4.7,
    reviews: 19,
    nextSession: "May 26, 2023 (3:30 PM)",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Data Science Lead",
    company: "DataInsights",
    expertise: ["Machine Learning", "Data Analysis", "Python", "Statistical Modeling"],
    bio: "PhD in Computer Science with a specialization in machine learning and data analysis.",
    availability: "Mon, Wed (5-7 PM)",
    rating: 4.8,
    reviews: 32,
    nextSession: "Not scheduled",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function MentorsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Mentor Assignments</h1>
        <p className="text-muted-foreground">
          Connect with your assigned mentors who will guide you through your learning journey.
        </p>
      </div>

      {/* Mentor Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assigned Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mentors.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mentors.filter((mentor) => mentor.nextSession !== "Not scheduled").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      {/* Mentors List */}
      <div className="space-y-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </DashboardLayout>
  )
}

// Mentor Card Component
function MentorCard({ mentor }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
            <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-xl">{mentor.name}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <Briefcase className="mr-1 h-4 w-4" />
              <span>
                {mentor.role} at {mentor.company}
              </span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
              <span className="ml-1 text-xs text-muted-foreground">({mentor.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm">{mentor.bio}</p>
          <div>
            <h4 className="text-sm font-medium mb-1">Expertise</h4>
            <div className="flex flex-wrap gap-1">
              {mentor.expertise.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-primary/5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Availability:</span>
            </div>
            <div className="font-medium">{mentor.availability}</div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Next Session:</span>
            </div>
            <div className="font-medium">{mentor.nextSession}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1">
          <Calendar className="h-4 w-4" /> Schedule Session
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <MessageSquare className="h-4 w-4" /> Message
          </Button>
          <Button size="sm" className="gap-1">
            <Video className="h-4 w-4" /> Video Call
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
