import { BarChart3, PieChart, LineChart, ArrowUpRight, Download, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive analytics and insights for your educational programs.</p>
      </div>

      {/* Analytics Overview */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 8%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Acceptance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 font-medium">↓ 3%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Date Range and Filter Section */}
      <div className="mb-8 bg-card/50 p-4 rounded-lg border border-border">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="relative">
              <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="date" className="w-full bg-background pl-8" />
            </div>
          </div>
          <div>
            <div className="relative">
              <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="date" className="w-full bg-background pl-8" />
            </div>
          </div>
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Programs</option>
              <option value="web-dev">Web Development</option>
              <option value="marketing">Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="design">UX/UI Design</option>
              <option value="business">Business Development</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" /> Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Application Trends</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button variant="outline" size="sm" className="gap-1 ml-auto">
                  View Details <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Program Distribution</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button variant="outline" size="sm" className="gap-1 ml-auto">
                  View Details <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Completion Rates</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button variant="outline" size="sm" className="gap-1 ml-auto">
                  View Details <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Employment Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button variant="outline" size="sm" className="gap-1 ml-auto">
                  View Details <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Application Conversion</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Web Development</div>
                    <div className="text-right font-medium">45%</div>
                    <div>Marketing</div>
                    <div className="text-right font-medium">38%</div>
                    <div>Data Science</div>
                    <div className="text-right font-medium">52%</div>
                    <div>UX/UI Design</div>
                    <div className="text-right font-medium">40%</div>
                    <div>Business Dev</div>
                    <div className="text-right font-medium">35%</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Program Completion</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Web Development</div>
                    <div className="text-right font-medium">92%</div>
                    <div>Marketing</div>
                    <div className="text-right font-medium">88%</div>
                    <div>Data Science</div>
                    <div className="text-right font-medium">85%</div>
                    <div>UX/UI Design</div>
                    <div className="text-right font-medium">90%</div>
                    <div>Business Dev</div>
                    <div className="text-right font-medium">82%</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Employment Rate (90 days)</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Web Development</div>
                    <div className="text-right font-medium">85%</div>
                    <div>Marketing</div>
                    <div className="text-right font-medium">78%</div>
                    <div>Data Science</div>
                    <div className="text-right font-medium">90%</div>
                    <div>UX/UI Design</div>
                    <div className="text-right font-medium">82%</div>
                    <div>Business Dev</div>
                    <div className="text-right font-medium">75%</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="outline" size="sm" className="gap-1 ml-auto">
                Download Full Report <Download className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Application Analytics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-[21/9] bg-muted rounded-md flex items-center justify-center">
                <LineChart className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Student Demographics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-[21/9] bg-muted rounded-md flex items-center justify-center">
                <PieChart className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outcomes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-[21/9] bg-muted rounded-md flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
