import { Download, Share2, Eye, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for certificates
const certificates = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    issuer: "TechCorp Academy",
    issueDate: "June 15, 2023",
    expiryDate: "No Expiry",
    credentialID: "WD-2023-1234",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    status: "Issued",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 2,
    title: "Digital Marketing Essentials",
    issuer: "Global Marketing Institute",
    issueDate: "May 20, 2023",
    expiryDate: "May 20, 2025",
    credentialID: "DM-2023-5678",
    skills: ["Social Media Marketing", "SEO", "Content Strategy", "Analytics"],
    status: "Issued",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 3,
    title: "Data Science Bootcamp",
    issuer: "DataInsights Learning",
    issueDate: "Pending",
    expiryDate: "No Expiry",
    credentialID: "DS-2023-9012",
    skills: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
    status: "Pending",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    issuer: "Creative Design Academy",
    issueDate: "April 10, 2023",
    expiryDate: "No Expiry",
    credentialID: "UX-2023-3456",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    status: "Issued",
    image: "/placeholder.svg?height=200&width=350",
  },
]

export default function CertificatesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Certificates & Achievements</h1>
        <p className="text-muted-foreground">
          View and download your earned certificates and showcase your accomplishments.
        </p>
      </div>

      {/* Certificate Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
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
            <CardTitle className="text-sm font-medium">Issued</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.filter((cert) => cert.status === "Issued").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.filter((cert) => cert.status === "Pending").length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Certificates Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Certificates</TabsTrigger>
          <TabsTrigger value="issued">Issued</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </TabsContent>

        <TabsContent value="issued" className="grid gap-6 md:grid-cols-2">
          {certificates
            .filter((cert) => cert.status === "Issued")
            .map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
        </TabsContent>

        <TabsContent value="pending" className="grid gap-6 md:grid-cols-2">
          {certificates
            .filter((cert) => cert.status === "Pending")
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
      <div className="relative">
        <img
          src={certificate.image || "/placeholder.svg"}
          alt={certificate.title}
          className="w-full h-48 object-cover border-b"
        />
        {certificate.status === "Pending" ? (
          <div className="absolute top-0 right-0 m-2">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Pending
            </Badge>
          </div>
        ) : (
          <div className="absolute top-0 right-0 m-2">
            <Badge variant="default" className="bg-green-100 text-green-800">
              Issued
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl">{certificate.title}</CardTitle>
          <p className="text-sm font-medium text-muted-foreground">{certificate.issuer}</p>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Award className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Credential ID:</span>
            <span className="ml-1 font-medium">{certificate.credentialID}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Issued:</span>
            <span className="ml-1 font-medium">
              {certificate.status === "Pending" ? "Pending" : certificate.issueDate}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Expires:</span>
            <span className="ml-1 font-medium">{certificate.expiryDate}</span>
          </div>
          <div className="flex flex-wrap gap-1 pt-1">
            {certificate.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-primary/5">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1">
          <Eye className="h-4 w-4" /> View
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1" disabled={certificate.status === "Pending"}>
            <Share2 className="h-4 w-4" /> Share
          </Button>
          <Button size="sm" className="gap-1" disabled={certificate.status === "Pending"}>
            <Download className="h-4 w-4" /> Download
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
