"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  PieChart,
  Calendar,
  Users,
  Lightbulb,
  Zap,
  Bell,
  Settings,
  Search,
  ChevronDown,
  Plus,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function DashboardModal({ open, onOpenChange }) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] w-[1200px] max-h-[90vh] overflow-auto p-0 gap-0 bg-background">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 border-r border-border bg-card/50 p-4 hidden md:block">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="font-bold text-xl text-foreground">TISD</span>
            </div>

            <nav className="space-y-1">
              <Button
                variant={activeTab === "overview" ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href="/dashboard/overview">
                  <BarChart className="mr-2 h-4 w-4" />
                  Overview
                </Link>
              </Button>
              <Button
                variant={activeTab === "projects" ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href="/dashboard/projects">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Projects
                </Link>
              </Button>
              <Button
                variant={activeTab === "analytics" ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href="/dashboard/analytics">
                  <PieChart className="mr-2 h-4 w-4" />
                  Analytics
                </Link>
              </Button>
              <Button
                variant={activeTab === "calendar" ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href="/dashboard/calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Link>
              </Button>
              <Button variant={activeTab === "team" ? "secondary" : "ghost"} className="w-full justify-start" asChild>
                <Link href="/dashboard/team">
                  <Users className="mr-2 h-4 w-4" />
                  Team
                </Link>
              </Button>
            </nav>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Recent Projects</h3>
              <div className="space-y-2">
                <div className="p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <p className="text-sm font-medium">AI Resource Allocation</p>
                  <div className="flex justify-between items-center mt-1">
                    <div className="w-full bg-muted/20 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">65%</span>
                  </div>
                </div>
                <div className="p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <p className="text-sm font-medium">Knowledge Platform</p>
                  <div className="flex justify-between items-center mt-1">
                    <div className="w-full bg-muted/20 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: "40%" }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">40%</span>
                  </div>
                </div>
                <div className="p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  <p className="text-sm font-medium">Learning Environment</p>
                  <div className="flex justify-between items-center mt-1">
                    <div className="w-full bg-muted/20 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="border-b border-border p-4 flex justify-between items-center bg-background">
              <div className="flex items-center md:hidden">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">T</span>
                </div>
                <span className="font-bold text-xl text-foreground ml-2">TISD</span>
              </div>

              <div className="relative hidden md:flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 w-[300px] bg-background" />
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
                </div>
              </div>
            </header>

            {/* Dashboard Content */}
            <main className="flex-1 p-6 overflow-auto bg-background/50">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-1">Welcome back, John</h1>
                <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Projects</p>
                      <h3 className="text-2xl font-bold mt-1">12</h3>
                    </div>
                    <div className="bg-primary/20 p-2 rounded-md">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs">
                    <span className="text-green-500 flex items-center">+2 new</span>
                    <span className="text-muted-foreground ml-2">from last month</span>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">Ideas Generated</p>
                      <h3 className="text-2xl font-bold mt-1">247</h3>
                    </div>
                    <div className="bg-primary/20 p-2 rounded-md">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs">
                    <span className="text-green-500 flex items-center">+24%</span>
                    <span className="text-muted-foreground ml-2">from last month</span>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">Team Members</p>
                      <h3 className="text-2xl font-bold mt-1">8</h3>
                    </div>
                    <div className="bg-primary/20 p-2 rounded-md">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs">
                    <span className="text-green-500 flex items-center">+1 new</span>
                    <span className="text-muted-foreground ml-2">team member</span>
                  </div>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                      <h3 className="text-2xl font-bold mt-1">89%</h3>
                    </div>
                    <div className="bg-primary/20 p-2 rounded-md">
                      <BarChart className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs">
                    <span className="text-green-500 flex items-center">+7%</span>
                    <span className="text-muted-foreground ml-2">from last month</span>
                  </div>
                </div>
              </div>

              {/* Active Projects */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Active Projects</h2>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" /> New Project
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium">AI-Powered Resource Allocation System</h3>
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      An intelligent system that optimizes resource distribution based on real-time needs and predictive
                      analytics.
                    </p>
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-1.5" indicatorClassName="bg-primary" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">SK</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">LM</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-muted-foreground">Due in 2 weeks</span>
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium">Decentralized Knowledge Sharing Platform</h3>
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      A blockchain-based platform that incentivizes experts to share knowledge and solutions.
                    </p>
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>40%</span>
                      </div>
                      <Progress value={40} className="h-1.5" indicatorClassName="bg-primary" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">RK</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-muted-foreground">Due in 1 month</span>
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium">Adaptive Learning Environment</h3>
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      A personalized learning system that adapts to individual learning styles and pace.
                    </p>
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-1.5" indicatorClassName="bg-primary" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">EM</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20 text-primary">TK</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-muted-foreground">Due in 3 days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <div className="p-4 border-b border-border flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Lightbulb className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">New idea generated</span> for AI-Powered Resource Allocation
                        System
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>

                  <div className="p-4 border-b border-border flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Sarah Kim</span> joined the Adaptive Learning Environment project
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                    </div>
                  </div>

                  <div className="p-4 border-b border-border flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <BarChart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Project milestone reached</span> for Decentralized Knowledge
                        Sharing Platform
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                    </div>
                  </div>

                  <div className="p-4 flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Team meeting scheduled</span> for AI-Powered Resource Allocation
                        System
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
