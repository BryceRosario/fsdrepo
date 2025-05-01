import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileCheck, Award, Users, MessageSquare, BarChart } from "lucide-react"
import Link from "next/link"

export default function StudentFeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                Student <span className="text-primary">Features</span>
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover all the tools and resources available to help you succeed in your educational journey.
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
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Browse Opportunities</CardTitle>
                  <CardDescription>
                    Explore available internships and training programs tailored to your interests and skills.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Filter by industry, location, and duration</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>View detailed program descriptions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Save favorites for later application</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/opportunities">Browse Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Application Tracking</CardTitle>
                  <CardDescription>
                    Apply to internships and track your application status throughout the process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>One-click application submission</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Real-time status updates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Application history and analytics</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/applications">Track Applications</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Certificates & Achievements</CardTitle>
                  <CardDescription>
                    Download participation certificates and showcase your accomplishments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Digital certificate downloads</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Shareable achievement badges</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Verification system for employers</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/certificates">View Certificates</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Mentor Assignments</CardTitle>
                  <CardDescription>
                    Connect with assigned mentors who will guide you through your learning journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>View mentor profiles and expertise</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Schedule one-on-one sessions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Direct messaging with mentors</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/mentors">Connect with Mentors</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Feedback System</CardTitle>
                  <CardDescription>Provide and receive feedback to improve your experience and skills.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Post-program evaluation forms</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Structured feedback templates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Improvement suggestions</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/feedback">Submit Feedback</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Skill Progress Tracker</CardTitle>
                  <CardDescription>Monitor your skill development and track your progress over time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Visual skill progress charts</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Milestone achievements</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Personalized skill recommendations</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/skills">Track Progress</Link>
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
                Ready to start your <span className="text-primary">learning journey</span>?
              </h2>
              <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students who are advancing their careers through our platform.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/signup">Sign Up Now</Link>
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
