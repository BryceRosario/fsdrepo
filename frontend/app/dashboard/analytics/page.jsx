import { PieChart, LineChart, ArrowUp, ArrowDown, Download, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import DashboardLayout from "../layout"
import Link from "next/link"

export default function AnalyticsPage() {
  return (
    <DashboardLayout activeTab="analytics">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Analytics</h1>
          <p className="text-muted-foreground">Track your project performance and metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-border gap-1">
            <Calendar className="h-4 w-4" /> Last 30 Days
          </Button>
          <Button variant="outline" size="sm" className="border-border gap-1">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Ideas Generated</p>
                <h3 className="text-2xl font-bold mt-1">247</h3>
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>24%</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-muted/20 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: "75%" }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
                <h3 className="text-2xl font-bold mt-1">7</h3>
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>12%</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-muted/20 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: "60%" }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <h3 className="text-2xl font-bold mt-1">89%</h3>
              </div>
              <div className="flex items-center text-green-500 text-sm">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>7%</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-muted/20 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: "89%" }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Time to Completion</p>
                <h3 className="text-2xl font-bold mt-1">18 days</h3>
              </div>
              <div className="flex items-center text-red-500 text-sm">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>3%</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-muted/20 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: "45%" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Project Completion Trends</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="aspect-[4/3] bg-muted/20 rounded-md flex items-center justify-center">
              <LineChart className="h-12 w-12 text-primary/40" />
              <span className="ml-2 text-muted-foreground">Line Chart Visualization</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-lg font-medium">2 Projects</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Month</p>
                <p className="text-lg font-medium">3 Projects</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Time</p>
                <p className="text-lg font-medium">18 Days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Idea Generation by Category</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="aspect-[4/3] bg-muted/20 rounded-md flex items-center justify-center">
              <PieChart className="h-12 w-12 text-primary/40" />
              <span className="ml-2 text-muted-foreground">Pie Chart Visualization</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span className="text-sm">AI & Machine Learning</span>
                </div>
                <span className="text-sm font-medium">42%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Blockchain & Web3</span>
                </div>
                <span className="text-sm font-medium">28%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Education Tech</span>
                </div>
                <span className="text-sm font-medium">18%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">Other</span>
                </div>
                <span className="text-sm font-medium">12%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Performance */}
      <div>
        <h2 className="text-xl font-bold mb-4">Project Performance</h2>
        <div className="space-y-4">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="font-medium">AI-Powered Resource Allocation System</h3>
                  <p className="text-sm text-muted-foreground mt-1">Active - 65% Complete</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="flex items-center text-green-500 text-sm mr-4">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    <span>On Track</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 text-foreground hover:bg-primary/10"
                    asChild
                  >
                    <Link href="/dashboard/projects/details">View Details</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="text-primary">65%</span>
                  </div>
                  <Progress value={65} className="h-2" indicatorClassName="bg-primary" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Time Spent</p>
                    <p className="text-lg font-medium">32 days</p>
                  </div>
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Team Size</p>
                    <p className="text-lg font-medium">3 members</p>
                  </div>
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Ideas Generated</p>
                    <p className="text-lg font-medium">24</p>
                  </div>
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Estimated Completion</p>
                    <p className="text-lg font-medium">2 weeks</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="font-medium">Adaptive Learning Environment</h3>
                  <p className="text-sm text-muted-foreground mt-1">Active - 85% Complete</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="flex items-center text-green-500 text-sm mr-4">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    <span>Ahead of Schedule</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 text-foreground hover:bg-primary/10"
                    asChild
                  >
                    <Link href="/dashboard/projects/details">View Details</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <Progress value={85} className="h-2" indicatorClassName="bg-primary" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Time Spent</p>
                    <p className="text-lg font-medium">45 days</p>
                  </div>
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Team Size</p>
                    <p className="text-lg font-medium">3 members</p>
                  </div>
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Ideas Generated</p>
                    <p className="text-lg font-medium">36</p>
                  </div>
                  <div className="bg-background/50 p-3 rounded-md">
                    <p className="text-xs text-muted-foreground">Estimated Completion</p>
                    <p className="text-lg font-medium">3 days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
