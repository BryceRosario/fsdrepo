import { Plus, Search, Filter, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for opportunities
const opportunities = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Internship",
    duration: "3 months",
    startDate: "June 15, 2023",
    endDate: "September 15, 2023",
    status: "Active",
    applicants: 12,
    positions: 3,
    description: "Join our engineering team to develop cutting-edge web applications using React and Node.js.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Knowledge of JavaScript, HTML, and CSS",
      "Familiarity with React is a plus",
    ],
  },
  {
    id: 2,
    title: "Marketing Assistant",
    company: "Global Marketing Inc.",
    location: "New York, NY",
    type: "Training Program",
    duration: "6 weeks",
    startDate: "July 1, 2023",
    endDate: "August 15, 2023",
    status: "Active",
    applicants: 8,
    positions: 2,
    description: "Learn digital marketing strategies and help implement campaigns for our clients.",
    requirements: [
      "Interest in marketing and communications",
      "Strong writing and communication skills",
      "Basic understanding of social media platforms",
    ],
  },
  {
    id: 3,
    title: "Data Science Trainee",
    company: "DataInsights",
    location: "Remote",
    type: "Training Program",
    duration: "2 months",
    startDate: "July 15, 2023",
    endDate: "September 15, 2023",
    status: "Draft",
    applicants: 0,
    positions: 5,
    description: "Participate in our intensive data science bootcamp and work on real-world projects.",
    requirements: [
      "Background in statistics, mathematics, or computer science",
      "Basic programming knowledge (Python preferred)",
      "Interest in machine learning and data analysis",
    ],
  },
  {
    id: 4,
    title: "UX/UI Design Intern",
    company: "Creative Solutions",
    location: "Chicago, IL",
    type: "Internship",
    duration: "4 months",
    startDate: "June 1, 2023",
    endDate: "October 1, 2023",
    status: "Active",
    applicants: 15,
    positions: 2,
    description: "Work with our design team to create user-centered designs for web and mobile applications.",
    requirements: [
      "Design portfolio showcasing UI/UX projects",
      "Proficiency with design tools like Figma or Adobe XD",
      "Understanding of user-centered design principles",
    ],
  },
  {
    id: 5,
    title: "Business Development Trainee",
    company: "Growth Partners",
    location: "Austin, TX",
    type: "Training Program",
    duration: "3 months",
    startDate: "August 1, 2023",
    endDate: "November 1, 2023",
    status: "Draft",
    applicants: 0,
    positions: 4,
    description: "Learn sales strategies and help our team identify and pursue new business opportunities.",
    requirements: [
      "Strong communication and interpersonal skills",
      "Interest in sales and business development",
      "Self-motivated with a growth mindset",
    ],
  },
]

export default function OpportunitiesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Post Opportunities</h1>
        <p className="text-muted-foreground">
          Create and publish internships and training programs to attract talented students.
        </p>
      </div>

      {/* Opportunity Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{opportunities.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{opportunities.filter((opp) => opp.status === "Active").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{opportunities.reduce((sum, opp) => sum + opp.applicants, 0)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{opportunities.reduce((sum, opp) => sum + opp.positions, 0)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Create Opportunity Button */}
      <div className="mb-6 flex justify-end">
        <Button className="gap-1">
          <Plus className="h-4 w-4" /> Create New Opportunity
        </Button>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 bg-card/50 p-4 rounded-lg border border-border">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search opportunities by title, location, or type..."
                className="w-full bg-background pl-8"
              />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Types</option>
              <option value="internship">Internship</option>
              <option value="training">Training Program</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Opportunities Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Opportunities</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {opportunities
            .filter((opp) => opp.status === "Active")
            .map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          {opportunities
            .filter((opp) => opp.status === "Draft")
            .map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Opportunity Card Component
function OpportunityCard({ opportunity }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{opportunity.title}</CardTitle>
            <p className="text-sm font-medium text-muted-foreground">{opportunity.company}</p>
          </div>
          <Badge
            variant={opportunity.status === "Active" ? "default" : "secondary"}
            className="flex items-center gap-1"
          >
            {opportunity.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Type:</span>
                <span className="ml-1 font-medium">{opportunity.type}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Duration:</span>
                <span className="ml-1 font-medium">{opportunity.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Location:</span>
                <span className="ml-1 font-medium">{opportunity.location}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Start Date:</span>
                <span className="ml-1 font-medium">{opportunity.startDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">End Date:</span>
                <span className="ml-1 font-medium">{opportunity.endDate}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Applicants:</span>
                <span className="ml-1 font-medium">
                  {opportunity.applicants} / {opportunity.positions} positions
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-1">Description</h4>
            <p className="text-sm text-muted-foreground">{opportunity.description}</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Requirements</h4>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              {opportunity.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button size="sm">View Applicants</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
