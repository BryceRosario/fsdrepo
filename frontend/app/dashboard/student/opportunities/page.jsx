import { Search, Filter, MapPin, Clock, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardLayout from "../../layout"

// Sample data for opportunities
const opportunities = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Internship",
    duration: "3 months",
    category: "Technology",
    description: "Join our engineering team to develop cutting-edge web applications using React and Node.js.",
    skills: ["React", "JavaScript", "Node.js"],
    deadline: "June 15, 2023",
  },
  {
    id: 2,
    title: "Marketing Assistant",
    company: "Global Marketing Inc.",
    location: "New York, NY",
    type: "Training Program",
    duration: "6 weeks",
    category: "Marketing",
    description: "Learn digital marketing strategies and help implement campaigns for our clients.",
    skills: ["Social Media", "Content Creation", "Analytics"],
    deadline: "May 30, 2023",
  },
  {
    id: 3,
    title: "Data Science Trainee",
    company: "DataInsights",
    location: "Remote",
    type: "Training Program",
    duration: "2 months",
    category: "Data Science",
    description: "Participate in our intensive data science bootcamp and work on real-world projects.",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    deadline: "July 5, 2023",
  },
  {
    id: 4,
    title: "UX/UI Design Intern",
    company: "Creative Solutions",
    location: "Chicago, IL",
    type: "Internship",
    duration: "4 months",
    category: "Design",
    description: "Work with our design team to create user-centered designs for web and mobile applications.",
    skills: ["Figma", "UI Design", "Prototyping"],
    deadline: "June 10, 2023",
  },
  {
    id: 5,
    title: "Business Development Trainee",
    company: "Growth Partners",
    location: "Austin, TX",
    type: "Training Program",
    duration: "3 months",
    category: "Business",
    description: "Learn sales strategies and help our team identify and pursue new business opportunities.",
    skills: ["Communication", "Sales", "Research"],
    deadline: "May 25, 2023",
  },
  {
    id: 6,
    title: "Cybersecurity Intern",
    company: "SecureNet",
    location: "Boston, MA",
    type: "Internship",
    duration: "6 months",
    category: "Technology",
    description: "Join our security team to learn about network security and threat detection.",
    skills: ["Network Security", "Threat Analysis", "Security Tools"],
    deadline: "July 15, 2023",
  },
]

export default function OpportunitiesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Browse Opportunities</h1>
        <p className="text-muted-foreground">
          Explore available internships and training programs tailored to your interests and skills.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 bg-card/50 p-4 rounded-lg border border-border">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search opportunities..." className="w-full bg-background pl-8" />
            </div>
          </div>
          <div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="training">Training Program</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Opportunities List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <Card key={opportunity.id} className="overflow-hidden hover:border-primary/20 transition-all">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{opportunity.company}</p>
                </div>
                <Badge variant={opportunity.type === "Internship" ? "default" : "secondary"}>{opportunity.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {opportunity.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {opportunity.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="mr-1 h-4 w-4" />
                  {opportunity.category}
                </div>
                <p className="text-sm">{opportunity.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {opportunity.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-primary/5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <div className="text-xs text-muted-foreground">Deadline: {opportunity.deadline}</div>
              <Button size="sm">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
