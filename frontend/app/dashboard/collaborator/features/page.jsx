import { ArrowRight, Briefcase, ClipboardList, Users, FileText, Award, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import DashboardLayout from "../../layout"

export default function CollaboratorFeaturesPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Collaborator Features</h1>
        <p className="text-muted-foreground">Explore all the tools and resources available to you as a collaborator.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Post Opportunities */}
        <Card className="flex flex-col">
          <CardHeader>
            <Briefcase className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Post Opportunities</CardTitle>
            <CardDescription>
              Create and manage internship, project, and job opportunities for students.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Create detailed opportunity listings</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Specify requirements and qualifications</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Set application deadlines and processes</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/collaborator/opportunities">
                Manage Opportunities <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Application Management */}
        <Card className="flex flex-col">
          <CardHeader>
            <ClipboardList className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Application Management</CardTitle>
            <CardDescription>Review and manage student applications for your opportunities.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Review incoming student applications</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Track application status and progress</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Communicate with applicants</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/collaborator/applications">
                Manage Applications <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Selection Process */}
        <Card className="flex flex-col">
          <CardHeader>
            <Users className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Selection Process</CardTitle>
            <CardDescription>Manage and track your selection processes for different opportunities.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Create structured selection processes</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Track candidates through multiple stages</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Collaborate with team members on selection</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/collaborator/selection">
                Manage Selection <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Student Reports */}
        <Card className="flex flex-col">
          <CardHeader>
            <FileText className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Student Reports</CardTitle>
            <CardDescription>Generate and analyze reports on student performance and program outcomes.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Generate detailed student performance reports</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Analyze program effectiveness and outcomes</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Export reports in various formats</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/collaborator/reports">
                View Reports <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Certificate Management */}
        <Card className="flex flex-col">
          <CardHeader>
            <Award className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Certificate Management</CardTitle>
            <CardDescription>Create, manage, and issue certificates for your educational programs.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Design custom certificate templates</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Issue certificates to program participants</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Track and verify issued certificates</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/collaborator/certificates">
                Manage Certificates <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Analytics Dashboard */}
        <Card className="flex flex-col">
          <CardHeader>
            <BarChart3 className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Comprehensive analytics and insights for your educational programs.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>View key performance indicators</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Analyze application and acceptance trends</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Track program outcomes and student success</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-1">
              <Link href="/dashboard/collaborator/analytics">
                View Analytics <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}
