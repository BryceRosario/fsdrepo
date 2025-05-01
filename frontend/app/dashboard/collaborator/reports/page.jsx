import { Filter, Download, BarChart3, PieChart, LineChart, Calendar, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "../../layout"

export default function StudentReportsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Student Reports</h1>
        <p className="text-muted-foreground">
          Generate and analyze reports on student performance and program outcomes.
        </p>
      </div>

      {/* Report Stats */}
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
            <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 3</span> from last month
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
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 0.2</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 bg-card/50 p-4 rounded-lg border border-border">
        <div className="grid gap-4 md:grid-cols-3">
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
          <div>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">All Cohorts</option>
              <option value="spring-2023">Spring 2023</option>
              <option value="summer-2023">Summer 2023</option>
              <option value="fall-2023">Fall 2023</option>
              <option value="winter-2023">Winter 2023</option>
            </select>
          </div>
          <div>
            <div className="relative">
              <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="date" className="w-full bg-background pl-8" />
            </div>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" /> Export CSV
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" /> Export PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Program Enrollment</CardTitle>
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
                <CardTitle className="text-lg">Completion Rates</CardTitle>
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
                <CardTitle className="text-lg">Student Satisfaction</CardTitle>
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
              <CardTitle className="text-lg">Key Metrics Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
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
                  <h4 className="text-sm font-medium">Student Satisfaction</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Web Development</div>
                    <div className="text-right font-medium">4.8/5</div>
                    <div>Marketing</div>
                    <div className="text-right font-medium">4.6/5</div>
                    <div>Data Science</div>
                    <div className="text-right font-medium">4.7/5</div>
                    <div>UX/UI Design</div>
                    <div className="text-right font-medium">4.9/5</div>
                    <div>Business Dev</div>
                    <div className="text-right font-medium">4.5/5</div>
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

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Student Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-[21/9] bg-muted rounded-md flex items-center justify-center">
                <LineChart className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
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
