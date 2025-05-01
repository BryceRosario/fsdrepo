import { TrendingUp, Award, BookOpen, Code, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

// Sample data for skills
const skillCategories = [
  {
    id: 1,
    name: "Technical Skills",
    skills: [
      {
        id: 101,
        name: "JavaScript",
        progress: 75,
        level: "Intermediate",
        lastUpdated: "May 15, 2023",
        certifications: ["Web Development Fundamentals"],
        projects: 3,
      },
      {
        id: 102,
        name: "React",
        progress: 60,
        level: "Intermediate",
        lastUpdated: "May 20, 2023",
        certifications: ["Web Development Fundamentals"],
        projects: 2,
      },
      {
        id: 103,
        name: "Node.js",
        progress: 45,
        level: "Beginner",
        lastUpdated: "May 10, 2023",
        certifications: [],
        projects: 1,
      },
      {
        id: 104,
        name: "HTML/CSS",
        progress: 90,
        level: "Advanced",
        lastUpdated: "April 25, 2023",
        certifications: ["Web Development Fundamentals"],
        projects: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Soft Skills",
    skills: [
      {
        id: 201,
        name: "Communication",
        progress: 85,
        level: "Advanced",
        lastUpdated: "May 18, 2023",
        certifications: [],
        projects: 4,
      },
      {
        id: 202,
        name: "Teamwork",
        progress: 80,
        level: "Advanced",
        lastUpdated: "May 12, 2023",
        certifications: [],
        projects: 3,
      },
      {
        id: 203,
        name: "Problem Solving",
        progress: 70,
        level: "Intermediate",
        lastUpdated: "May 5, 2023",
        certifications: [],
        projects: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Domain Knowledge",
    skills: [
      {
        id: 301,
        name: "Web Development",
        progress: 65,
        level: "Intermediate",
        lastUpdated: "May 22, 2023",
        certifications: ["Web Development Fundamentals"],
        projects: 3,
      },
      {
        id: 302,
        name: "UI/UX Design",
        progress: 50,
        level: "Beginner",
        lastUpdated: "May 8, 2023",
        certifications: [],
        projects: 1,
      },
    ],
  },
]

// Helper function to get level badge variant
const getLevelVariant = (level) => {
  switch (level) {
    case "Beginner":
      return "secondary"
    case "Intermediate":
      return "default"
    case "Advanced":
      return "success"
    default:
      return "outline"
  }
}

export default function SkillsPage() {
  // Calculate overall progress
  const allSkills = skillCategories.flatMap((category) => category.skills)
  const totalProgress = allSkills.reduce((sum, skill) => sum + skill.progress, 0) / allSkills.length

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Skill Progress Tracker</h1>
        <p className="text-muted-foreground">Monitor your skill development and track your progress over time.</p>
      </div>

      {/* Skills Overview */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold">{Math.round(totalProgress)}%</div>
            <Progress value={totalProgress} className="h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allSkills.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(allSkills.flatMap((skill) => skill.certifications)).size}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allSkills.reduce((sum, skill) => sum + skill.projects, 0)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Skills</TabsTrigger>
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={`category-${category.id}`}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.id}>
                <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={`category-${category.id}`}>
            <div className="grid gap-4 md:grid-cols-2">
              {category.skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </DashboardLayout>
  )
}

// Skill Card Component
function SkillCard({ skill }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{skill.name}</CardTitle>
          <Badge variant={getLevelVariant(skill.level)}>{skill.level}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{skill.progress}%</span>
            </div>
            <Progress value={skill.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Last Updated:</span>
            </div>
            <div className="font-medium">{skill.lastUpdated}</div>

            <div className="flex items-center">
              <Code className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Projects:</span>
            </div>
            <div className="font-medium">{skill.projects}</div>

            <div className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Certifications:</span>
            </div>
            <div className="font-medium">{skill.certifications.length > 0 ? skill.certifications.length : "None"}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" className="gap-1">
          <Layers className="h-4 w-4" /> Learning Resources
        </Button>
        <Button size="sm" className="gap-1">
          <TrendingUp className="h-4 w-4" /> Update Progress
        </Button>
      </CardFooter>
    </Card>
  )
}
