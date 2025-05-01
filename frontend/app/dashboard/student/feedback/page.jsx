import { MessageSquare, Send, ThumbsUp, ThumbsDown, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for feedback
const feedbackHistory = [
  {
    id: 1,
    program: "Web Development Internship",
    company: "TechCorp Solutions",
    submittedDate: "June 15, 2023",
    status: "Submitted",
    type: "Program Feedback",
    rating: 4,
    comments:
      "The internship was very informative and hands-on. I learned a lot about modern web development practices and tools. The mentors were knowledgeable and supportive.",
    response:
      "Thank you for your feedback! We're glad you had a positive experience and learned valuable skills during your internship.",
  },
  {
    id: 2,
    program: "Marketing Assistant Training",
    company: "Global Marketing Inc.",
    submittedDate: "May 20, 2023",
    status: "Submitted",
    type: "Mentor Feedback",
    rating: 5,
    comments:
      "My mentor was exceptional. They provided clear guidance, constructive feedback, and were always available when I needed help. The one-on-one sessions were particularly valuable.",
    response:
      "We appreciate your feedback on your mentor. We'll make sure to recognize their excellent work and continue to improve our mentorship program.",
  },
  {
    id: 3,
    program: "Data Science Bootcamp",
    company: "DataInsights",
    submittedDate: "Pending",
    status: "Draft",
    type: "Program Feedback",
    rating: 0,
    comments: "",
    response: "",
  },
]

export default function FeedbackPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Feedback System</h1>
        <p className="text-muted-foreground">Provide and receive feedback to improve your experience and skills.</p>
      </div>

      {/* Feedback Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedbackHistory.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Submitted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {feedbackHistory.filter((feedback) => feedback.status === "Submitted").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {feedbackHistory.filter((feedback) => feedback.status === "Draft").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback Tabs */}
      <Tabs defaultValue="history" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="history">Feedback History</TabsTrigger>
          <TabsTrigger value="new">New Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4">
          {feedbackHistory.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Submit New Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium">
                      Program/Internship
                    </label>
                    <select
                      id="program"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a program</option>
                      <option value="web-dev">Web Development Internship</option>
                      <option value="marketing">Marketing Assistant Training</option>
                      <option value="data-science">Data Science Bootcamp</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="feedback-type" className="text-sm font-medium">
                      Feedback Type
                    </label>
                    <select
                      id="feedback-type"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select feedback type</option>
                      <option value="program">Program Feedback</option>
                      <option value="mentor">Mentor Feedback</option>
                      <option value="platform">Platform Feedback</option>
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
                  <label htmlFor="comments" className="text-sm font-medium">
                    Comments
                  </label>
                  <Textarea
                    id="comments"
                    placeholder="Share your experience, what went well, and what could be improved..."
                    className="min-h-[150px]"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline">Save as Draft</Button>
              <Button className="gap-1">
                <Send className="h-4 w-4" /> Submit Feedback
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Feedback Card Component
function FeedbackCard({ feedback }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{feedback.program}</CardTitle>
            <p className="text-sm font-medium text-muted-foreground">{feedback.company}</p>
          </div>
          <Badge
            variant={feedback.status === "Submitted" ? "default" : "secondary"}
            className="flex items-center gap-1"
          >
            {feedback.status === "Submitted" ? <MessageSquare className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
            {feedback.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {feedback.status === "Submitted" ? `Submitted on: ${feedback.submittedDate}` : "Draft"}
            </span>
            <Badge variant="outline">{feedback.type}</Badge>
          </div>

          {feedback.status === "Submitted" && (
            <>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill={i < feedback.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">{feedback.rating}/5</span>
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Your Feedback:</h4>
                  <p className="text-sm bg-muted/50 p-3 rounded-md">{feedback.comments}</p>
                </div>

                {feedback.response && (
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Response:</h4>
                    <p className="text-sm bg-primary/5 p-3 rounded-md">{feedback.response}</p>
                  </div>
                )}
              </div>
            </>
          )}

          {feedback.status === "Draft" && (
            <p className="text-sm italic text-muted-foreground">
              This feedback is saved as a draft. Complete and submit it to share your experience.
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        {feedback.status === "Submitted" ? (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <ThumbsUp className="h-4 w-4" /> Helpful
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <ThumbsDown className="h-4 w-4" /> Not Helpful
            </Button>
          </div>
        ) : (
          <Button variant="outline" size="sm">
            Edit Draft
          </Button>
        )}

        {feedback.status === "Draft" && (
          <Button size="sm" className="gap-1">
            <Send className="h-4 w-4" /> Submit
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

// Star component for ratings
function Star(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
