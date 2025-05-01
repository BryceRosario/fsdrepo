import { Search, Filter, Award, Plus, Edit, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for certificates
const certificates = [
  {
    id: 1,
    title: "Web Development Internship Completion",
    description: "Awarded to students who successfully complete the Web Development Internship program.",
    issuedCount: 32,
    lastIssued: "June 15, 2023",
    status: "Active",
    template: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Marketing Assistant Training Certificate",
    description: "Recognizes completion of the Marketing Assistant Training program with distinction.",
    issuedCount: 28,
    lastIssued: "May 30, 2023",
    status: "Active",
    template: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Data Science Bootcamp Achievement",
    description: "Certifies proficiency in data science fundamentals and practical applications.",
    issuedCount: 15,
    lastIssued: "April 20, 2023",
    status: "Active",
    template: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "UX/UI Design Excellence Award",
    description: "Recognizes outstanding achievement in UX/UI design principles and implementation.",
    issuedCount: 0,
    lastIssued: "N/A",
    status: "Draft",
    template: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Business Development Fundamentals",
    description: "Certifies completion of business development training and acquisition of core skills.",
    issuedCount: 0,
    lastIssued: "N/A",
    status: "Draft",
    template: "/placeholder.svg?height=200&width=300",
  },
]

export default function CertificatesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Certificate Management</h1>
        <p className="text-muted-foreground">Create, manage, and issue certificates for your educational programs.</p>
      </div>

      {/* Certificate Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.filter((cert) => cert.status === "Active").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Draft Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.filter((cert) => cert.status === "Draft").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Issued</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {certificates.reduce((total, cert) => total + cert.issuedCount, 0)}
            </div>
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
                placeholder="Search certificates by title..."
                className="w-full bg-background pl-8"
              />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
            <Button className="gap-1">
              <Plus className="h-4 w-4" /> Create New Certificate
            </Button>
          </div>
        </div>
      </div>

      {/* Certificates Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Certificates</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          {certificates
            .filter((cert) => cert.status === "Active")
            .map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
        </TabsContent>

        <TabsContent value="draft" className="space-y-6">
          {certificates
            .filter((cert) => cert.status === "Draft")
            .map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Certificate Card Component
function CertificateCard({ certificate }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 p-4 flex items-center justify-center bg-muted/20">
          <img
            src={certificate.template || "/placeholder.svg"}
            alt={`${certificate.title} template`}
            className="max-w-full max-h-[200px] object-contain"
          />
        </div>
        <div className="md:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> {certificate.title}
                </CardTitle>
              </div>
              <Badge
                variant={certificate.status === "Active" ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                {certificate.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{certificate.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Issued</p>
                  <p className="text-sm">{certificate.issuedCount} times</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Last Issued</p>
                  <p className="text-sm">{certificate.lastIssued}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Edit className="h-4 w-4" /> Edit
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Eye className="h-4 w-4" /> Preview
              </Button>
            </div>
            <div className="flex gap-2">
              {certificate.status === "Active" ? (
                <Button size="sm" className="gap-1">
                  <Award className="h-4 w-4" /> Issue Certificate
                </Button>
              ) : (
                <Button size="sm" className="gap-1">
                  Activate Template
                </Button>
              )}
              <Button variant="outline" size="sm" className="gap-1 text-red-500 hover:text-red-600">
                <Trash2 className="h-4 w-4" /> Delete
              </Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
