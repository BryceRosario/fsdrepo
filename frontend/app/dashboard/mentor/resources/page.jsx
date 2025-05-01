import { Search, Filter, FileText, FileImage, FileCode, Video, Download, Plus, Share2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for resources
const resources = [
  {
    id: 1,
    title: "JavaScript Fundamentals Guide",
    type: "Document",
    format: "PDF",
    size: "2.4 MB",
    uploadDate: "May 15, 2023",
    category: "Web Development",
    description: "A comprehensive guide to JavaScript fundamentals including variables, functions, and objects.",
    shared: "All Web Development Students",
    downloads: 15,
    icon: FileText,
  },
  {
    id: 2,
    title: "Marketing Strategy Template",
    type: "Document",
    format: "DOCX",
    size: "1.8 MB",
    uploadDate: "May 10, 2023",
    category: "Marketing",
    description: "A template for creating comprehensive marketing strategies with examples.",
    shared: "Marketing Assistant Trainees",
    downloads: 8,
    icon: FileText,
  },
  {
    id: 3,
    title: "Data Visualization Examples",
    type: "Image",
    format: "PNG",
    size: "3.5 MB",
    uploadDate: "May 12, 2023",
    category: "Data Science",
    description: "Examples of effective data visualizations for different types of data.",
    shared: "Data Science Bootcamp Students",
    downloads: 12,
    icon: FileImage,
  },
  {
    id: 4,
    title: "UI Design Principles Presentation",
    type: "Document",
    format: "PPTX",
    size: "5.2 MB",
    uploadDate: "May 8, 2023",
    category: "Design",
    description: "A presentation on core UI design principles and best practices.",
    shared: "UX/UI Design Interns",
    downloads: 10,
    icon: FileText,
  },
  {
    id: 5,
    title: "React Component Examples",
    type: "Code",
    format: "JS",
    size: "1.2 MB",
    uploadDate: "May 18, 2023",
    category: "Web Development",
    description: "Example React components demonstrating best practices and patterns.",
    shared: "Web Development Interns",
    downloads: 20,
    icon: FileCode,
  },
  {
    id: 6,
    title: "Introduction to SEO",
    type: "Video",
    format: "MP4",
    size: "45.6 MB",
    uploadDate: "May 5, 2023",
    category: "Marketing",
    description: "A video tutorial introducing SEO concepts and strategies.",
    shared: "Marketing Assistant Trainees",
    downloads: 18,
    icon: Video,
  },
]

// Helper function to get icon color
const getIconColor = (type) => {
  switch (type) {
    case "Document":
      return "text-blue-500"
    case "Image":
      return "text-green-500"
    case "Code":
      return "text-purple-500"
    case "Video":
      return "text-red-500"
    default:
      return "text-gray-500"
  }
}

export default function ResourcesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Resource Management</h1>
        <p className="text-muted-foreground">Upload and share learning materials with your students.</p>
      </div>

      {/* Resource Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resources.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {resources.filter((resource) => resource.type === "Document").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resources.reduce((sum, resource) => sum + resource.downloads, 0)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">59.7 MB</div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Button */}
      <div className="mb-6 flex justify-end">
        <Button className="gap-1">
          <Plus className="h-4 w-4" /> Upload New Resource
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
                placeholder="Search resources by title, category, or format..."
                className="w-full bg-background pl-8"
              />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Categories</option>
              <option value="web-dev">Web Development</option>
              <option value="marketing">Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="design">Design</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Resources Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </TabsContent>

        <TabsContent value="documents" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources
            .filter((resource) => resource.type === "Document")
            .map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
        </TabsContent>

        <TabsContent value="code" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources
            .filter((resource) => resource.type === "Code")
            .map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
        </TabsContent>

        <TabsContent value="media" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources
            .filter((resource) => resource.type === "Image" || resource.type === "Video")
            .map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Resource Card Component
function ResourceCard({ resource }) {
  const IconComponent = resource.icon
  const iconColor = getIconColor(resource.type)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-md bg-muted ${iconColor}`}>
            <IconComponent className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-lg">{resource.title}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{resource.type}</Badge>
              <span className="text-xs text-muted-foreground">{resource.format}</span>
              <span className="text-xs text-muted-foreground">{resource.size}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm">{resource.description}</p>
          <div className="text-sm">
            <span className="text-muted-foreground">Shared with:</span>
            <span className="ml-1">{resource.shared}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Uploaded: {resource.uploadDate}</span>
            <span className="flex items-center">
              <Download className="mr-1 h-4 w-4 text-muted-foreground" />
              {resource.downloads} downloads
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1 text-red-500 hover:text-red-600">
          <Trash2 className="h-4 w-4" /> Delete
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" /> Share
          </Button>
          <Button size="sm" className="gap-1">
            <Download className="h-4 w-4" /> Download
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
