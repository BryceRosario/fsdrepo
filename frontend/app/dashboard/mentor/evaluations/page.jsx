import { Search, Filter, LucideStar, MessageSquare, Send, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for evaluations
const evaluations = [
  {
    id: 1,
    student: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Web Development Internship",
    submittedDate: "May 20, 2023",
    status: "Submitted",
    rating: 4,
    strengths: "Strong problem-solving skills, quick learner, good attention to detail.",
    areasForImprovement: "Could improve communication and documentation practices.",
    feedback:
      "Alex has shown great progress in mastering JavaScript and React. His code is clean and well-structured. I recommend focusing on documenting code better and communicating more regularly about challenges.",
  },
  {
    id: 2,
    student: {
      name: "Samantha Lee",
      email: "samantha.lee@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Marketing Assistant Training",
    submittedDate: "May 18, 2023",
    status: "Submitted",
    rating: 5,
    strengths: "Excellent communication, creative thinking, strong analytical skills.",
    areasForImprovement: "Could benefit from more technical SEO knowledge.",
    feedback:
      "Samantha has exceeded expectations in her content creation and campaign management. Her social media strategies have shown measurable results. I recommend she takes an advanced SEO course to round out her digital marketing skills.",
  },
  {
    id: 3,
    student: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Data Science Bootcamp",
    submittedDate: "Draft",
    status: "Draft",
    rating: 0,
    strengths: "",
    areasForImprovement: "",
    feedback: "",
  },
  {
    id: 4,
    student: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "UX/UI Design Internship",
    submittedDate: "May 15, 2023",
    status: "Submitted",
    rating: 4,
    strengths: "Creative design solutions, strong user empathy, excellent prototyping skills.",
    areasForImprovement: "Could improve on meeting deadlines and project management.",
    feedback:
      "Emily has a natural talent for understanding user needs and creating intuitive interfaces. Her design work is consistently high quality. I recommend she works on time management and setting realistic project timelines.",
  },
  {
    id: 5,
    student: {
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    program: "Business Development Training",
    submittedDate: "Draft",
    status: "Draft",
    rating: 0,
    strengths: "",
    areasForImprovement: "",
    feedback: "",
  },
]

export default function EvaluationsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Feedback & Evaluation</h1>
        <p className="text-muted-foreground">Provide structured feedback and evaluations to help students improve.</p>
      </div>

      {/* Evaluation Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Evaluations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{evaluations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Submitted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {evaluations.filter((evaluation) => evaluation.status === "Submitted").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{evaluations.filter((item) => item.status === "Draft").length}</div>
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
                placeholder="Search evaluations by student name or program..."
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

      {/* Evaluations Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Evaluations</TabsTrigger>
          <TabsTrigger value="submitted">Submitted</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="new">New Evaluation</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {evaluations.map((evaluation) => (
            <EvaluationCard key={evaluation.id} evaluation={evaluation} />
          ))}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          {evaluations
            .filter((item) => item.status === "Submitted")
            .map((evaluation) => (
              <EvaluationCard key={evaluation.id} evaluation={evaluation} />
            ))}
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          {evaluations
            .filter((item) => item.status === "Draft")
            .map((evaluation) => (
              <EvaluationCard key={evaluation.id} evaluation={evaluation} />
            ))}
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Create New Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="student" className="text-sm font-medium">
                      Student
                    </label>
                    <select
                      id="student"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a student</option>
                      <option value="alex">Alex Johnson</option>
                      <option value="samantha">Samantha Lee</option>
                      <option value="michael">Michael Chen</option>
                      <option value="emily">Emily Rodriguez</option>
                      <option value="david">David Wilson</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium">
                      Program
                    </label>
                    <select
                      id="program"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a program</option>
                      <option value="web-dev">Web Development Internship</option>
                      <option value="marketing">Marketing Assistant Training</option>
                      <option value="data-science">Data Science Bootcamp</option>
                      <option value="design">UX/UI Design Internship</option>
                      <option value="business">Business Development Training</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="rating" className="text-sm font-medium">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Button key={rating} variant="outline" size="sm" className="h-10 w-10 rounded-md p-0">
                        {rating}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="strengths" className="text-sm font-medium">
                    Strengths
                  </label>
                  <Textarea
                    id="strengths"
                    placeholder="Highlight the student's key strengths and accomplishments..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="improvement" className="text-sm font-medium">
                    Areas for Improvement
                  </label>
                  <Textarea
                    id="improvement"
                    placeholder="Suggest areas where the student could improve..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="feedback" className="text-sm font-medium">
                    Overall Feedback
                  </label>
                  <Textarea
                    id="feedback"
                    placeholder="Provide comprehensive feedback on the student's performance..."
                    className="min-h-[150px]"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline">Save as Draft</Button>
              <Button className="gap-1">
                <Send className="h-4 w-4" /> Submit Evaluation
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Evaluation Card Component
function EvaluationCard({ evaluation }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={evaluation.student.avatar || "/placeholder.svg"} alt={evaluation.student.name} />
              <AvatarFallback>{evaluation.student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{evaluation.student.name}</CardTitle>
              <p className="text-sm font-medium text-muted-foreground">{evaluation.program}</p>
            </div>
          </div>
          <Badge
            variant={evaluation.status === "Submitted" ? "default" : "secondary"}
            className="flex items-center gap-1"
          >
            {evaluation.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {evaluation.status === "Submitted" && (
            <>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <LucideStar
                      key={i}
                      className={`h-4 w-4 ${i < evaluation.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill={i < evaluation.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">{evaluation.rating}/5</span>
                <span className="ml-auto text-sm text-muted-foreground">Submitted: {evaluation.submittedDate}</span>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Strengths:</h4>
                  <p className="text-sm">{evaluation.strengths}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Areas for Improvement:</h4>
                  <p className="text-sm">{evaluation.areasForImprovement}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Overall Feedback:</h4>
                  <p className="text-sm">{evaluation.feedback}</p>
                </div>
              </div>
            </>
          )}

          {evaluation.status === "Draft" && (
            <p className="text-sm italic text-muted-foreground">
              This evaluation is saved as a draft. Complete and submit it to provide feedback to the student.
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        {evaluation.status === "Submitted" ? (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Edit className="h-4 w-4" /> Edit
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <MessageSquare className="h-4 w-4" /> Message Student
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Edit className="h-4 w-4" /> Continue Editing
            </Button>
            <Button variant="outline" size="sm" className="gap-1 text-red-500 hover:text-red-600">
              <Trash2 className="h-4 w-4" /> Delete Draft
            </Button>
          </div>
        )}

        {evaluation.status === "Draft" && (
          <Button size="sm" className="gap-1">
            <Send className="h-4 w-4" /> Submit
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
