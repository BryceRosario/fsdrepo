import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CheckCircle, Calendar, MessageSquare, FileText, ClipboardCheck } from "lucide-react"
import Link from "next/link"

export default function MentorFeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                Mentor <span className="text-primary">Features</span>
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Powerful tools to help you guide and support students throughout their learning journey.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Student Management</CardTitle>
                  <CardDescription>
                    View and manage all your assigned students in one centralized dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Comprehensive student profiles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Progress tracking and reporting</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Direct communication channels</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/students">Manage Students</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Application Review</CardTitle>
                  <CardDescription>
                    Efficiently review, approve, or reject student applications for programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Streamlined review interface</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Batch approval options</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Personalized feedback tools</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/applications">Review Applications</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Session Scheduling</CardTitle>
                  <CardDescription>Create and manage your training and mentoring calendar with ease.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Intuitive calendar interface</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Automated reminders and notifications</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Group and individual session options</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/calendar">Manage Calendar</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Feedback & Evaluation</CardTitle>
                  <CardDescription>
                    Provide structured feedback and evaluations to help students improve.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Customizable evaluation templates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Performance tracking over time</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Constructive feedback tools</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/evaluations">Provide Feedback</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Resource Management</CardTitle>
                  <CardDescription>Upload and share learning materials with your students.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Multiple file format support</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Organized resource library</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Access control and permissions</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/resources">Manage Resources</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ClipboardCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Progress Tracking</CardTitle>
                  <CardDescription>
                    Monitor student attendance and track their progress throughout the program.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Attendance management system</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Milestone completion tracking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Performance analytics dashboard</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/progress">Track Progress</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Ready to start <span className="text-primary">mentoring</span>?
              </h2>
              <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community of mentors and help shape the next generation of professionals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/signup">Become a Mentor</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/20 text-foreground hover:bg-primary/10"
                >
                  <Link href="/login">Log In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
