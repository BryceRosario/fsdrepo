import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, CheckCircle, FileText, Award, BarChart } from "lucide-react"
import Link from "next/link"

export default function CollaboratorFeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                Collaborator <span className="text-primary">Features</span>
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tools for companies and training organizations to connect with talented students.
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
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Post Opportunities</CardTitle>
                  <CardDescription>
                    Create and publish internships and training programs to attract talented students.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Customizable opportunity templates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Detailed description and requirements</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Scheduling and duration options</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/opportunities/create">Post Opportunity</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Application Management</CardTitle>
                  <CardDescription>Review and manage student applications for your opportunities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Comprehensive applicant profiles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Filtering and sorting capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Batch processing tools</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/applications/review">Review Applications</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Selection Process</CardTitle>
                  <CardDescription>
                    Streamlined tools to accept or reject applications and communicate with candidates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>One-click accept/reject functionality</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Customizable response templates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Interview scheduling tools</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/selection">Manage Selection</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Student Reports</CardTitle>
                  <CardDescription>Generate and download comprehensive reports on student performance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Customizable report templates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Multiple export formats (PDF, CSV)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Batch reporting capabilities</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/reports">Generate Reports</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Certificate Management</CardTitle>
                  <CardDescription>Create and issue completion certificates to program participants.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Branded certificate templates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Digital signature integration</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Batch certificate generation</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/certificates">Manage Certificates</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:border-primary/20 transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Analytics Dashboard</CardTitle>
                  <CardDescription>Access insights and analytics about your programs and participants.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Program performance metrics</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Applicant demographics</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                      <span>Completion and success rates</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/dashboard/analytics">View Analytics</Link>
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
                Ready to find your next <span className="text-primary">talent</span>?
              </h2>
              <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our platform to connect with skilled students and future professionals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/signup">Become a Collaborator</Link>
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
