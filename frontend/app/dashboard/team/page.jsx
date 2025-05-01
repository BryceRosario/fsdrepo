import { Users, Mail, Phone, Plus, Search, Filter, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import DashboardLayout from "../layout"
import Link from "next/link"

export default function TeamPage() {
  return (
    <DashboardLayout activeTab="team">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Team</h1>
          <p className="text-muted-foreground">Manage your team members and their roles</p>
        </div>
        <Button className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <Link href="/dashboard/team/new-member">
            <Plus className="h-4 w-4" /> Add Team Member
          </Link>
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search team members..." className="pl-9 bg-background" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="border-border">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="border-border gap-1">
            <ArrowUpDown className="h-3.5 w-3.5" /> Sort
          </Button>
          <Button variant="outline" size="sm" className="border-border">
            All Roles
          </Button>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Members</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Projects</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Productivity</p>
              <h3 className="text-2xl font-bold">92%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <div>
        <h2 className="text-xl font-bold mb-4">Team Members</h2>
        <div className="space-y-4">
          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl bg-primary/20 text-primary">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-medium text-lg">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Project Manager</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">AI</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Management</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Strategy</Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>john.doe@tisd.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/dashboard/team/profile">View Profile</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl bg-primary/20 text-primary">SK</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-medium text-lg">Sarah Kim</h3>
                  <p className="text-sm text-muted-foreground">Lead Developer</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">AI</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Machine Learning</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Python</Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>sarah.kim@tisd.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 234-5678</span>
                  </div>
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/dashboard/team/profile">View Profile</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl bg-primary/20 text-primary">RK</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-medium text-lg">Robert King</h3>
                  <p className="text-sm text-muted-foreground">Blockchain Specialist</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Blockchain</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Web3</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Smart Contracts</Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>robert.king@tisd.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 345-6789</span>
                  </div>
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/dashboard/team/profile">View Profile</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl bg-primary/20 text-primary">EM</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-medium text-lg">Emily Martinez</h3>
                  <p className="text-sm text-muted-foreground">UX/UI Designer</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Design</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">User Experience</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Figma</Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>emily.martinez@tisd.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 456-7890</span>
                  </div>
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/dashboard/team/profile">View Profile</Link>
                    </Button>
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
