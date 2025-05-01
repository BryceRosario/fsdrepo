"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  BarChart,
  Calendar,
  Users,
  Bell,
  Settings,
  Search,
  ChevronDown,
  Menu,
  BookOpen,
  FileCheck,
  Award,
  MessageSquare,
  CheckCircle,
  FileText,
  ClipboardCheck,
  Briefcase,
  FolderPlus,
  Layers,
} from "lucide-react"

export default function DashboardLayout({ children, activeTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname.includes("/dashboard/projects")) return "projects"
    if (pathname.includes("/dashboard/analytics")) return "analytics"
    if (pathname.includes("/dashboard/calendar")) return "calendar"
    if (pathname.includes("/dashboard/team")) return "team"
    return "overview"
  }

  const currentTab = activeTab || getActiveTab()

  // Determine user role based on pathname
  const getUserRole = () => {
    if (pathname.includes("/dashboard/student")) return "student"
    if (pathname.includes("/dashboard/mentor")) return "mentor"
    if (pathname.includes("/dashboard/collaborator")) return "collaborator"
    if (pathname.includes("/dashboard/admin")) return "admin"
    return "student" // Default to student
  }

  const userRole = getUserRole()

  // Handle navigation
  const navigateTo = (tab) => {
    if (tab === "overview") {
      router.push(`/dashboard/${userRole}`)
    } else {
      router.push(`/dashboard/${userRole}/${tab}`)
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border p-4 flex justify-between items-center bg-background">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline-block">TISD</span>
          </div>
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
              <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`w-64 border-r border-border bg-card/50 p-4 ${mobileMenuOpen ? "block" : "hidden"} md:block fixed md:static top-16 bottom-0 z-30 bg-background md:bg-transparent overflow-auto`}
        >
          <nav className="space-y-6">
            {/* Dashboard Overview */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Dashboard</h3>
              <div className="space-y-1">
                <Button
                  variant={
                    pathname.includes(`/dashboard/${userRole}`) && !pathname.includes(`/dashboard/${userRole}/`)
                      ? "secondary"
                      : "ghost"
                  }
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={`/dashboard/${userRole}`}>
                    <BarChart className="mr-2 h-4 w-4" />
                    Overview
                  </Link>
                </Button>
                <Button
                  variant={pathname.includes(`/dashboard/${userRole}/features`) ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={`/dashboard/${userRole}/features`}>
                    <Layers className="mr-2 h-4 w-4" />
                    Features
                  </Link>
                </Button>
              </div>
            </div>

            {/* Student Features - Only show if user is a student */}
            {userRole === "student" && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Student Features</h3>
                <div className="space-y-1">
                  <Button
                    variant={pathname.includes("/dashboard/student/opportunities") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/student/opportunities">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse Opportunities
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/student/applications") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/student/applications">
                      <FileCheck className="mr-2 h-4 w-4" />
                      Application Tracking
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/student/certificates") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/student/certificates">
                      <Award className="mr-2 h-4 w-4" />
                      Certificates
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/student/mentors") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/student/mentors">
                      <Users className="mr-2 h-4 w-4" />
                      Mentor Assignments
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/student/feedback") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/student/feedback">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Feedback
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/student/skills") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/student/skills">
                      <BarChart className="mr-2 h-4 w-4" />
                      Skill Progress
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Mentor Features - Only show if user is a mentor */}
            {userRole === "mentor" && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Mentor Features</h3>
                <div className="space-y-1">
                  <Button
                    variant={pathname.includes("/dashboard/mentor/students") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/mentor/students">
                      <Users className="mr-2 h-4 w-4" />
                      Student Management
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/mentor/applications") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/mentor/applications">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Application Review
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/mentor/calendar") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/mentor/calendar">
                      <Calendar className="mr-2 h-4 w-4" />
                      Session Scheduling
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/mentor/evaluations") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/mentor/evaluations">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Evaluations
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/mentor/resources") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/mentor/resources">
                      <FileText className="mr-2 h-4 w-4" />
                      Resources
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/mentor/progress") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/mentor/progress">
                      <ClipboardCheck className="mr-2 h-4 w-4" />
                      Progress Tracking
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Collaborator Features - Only show if user is a collaborator */}
            {userRole === "collaborator" && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Collaborator Features</h3>
                <div className="space-y-1">
                  <Button
                    variant={pathname.includes("/dashboard/collaborator/opportunities") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/collaborator/opportunities">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Post Opportunities
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/collaborator/applications") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/collaborator/applications">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Application Management
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/collaborator/selection") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/collaborator/selection">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Selection Process
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/collaborator/reports") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/collaborator/reports">
                      <FileText className="mr-2 h-4 w-4" />
                      Student Reports
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/collaborator/certificates") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/collaborator/certificates">
                      <Award className="mr-2 h-4 w-4" />
                      Certificate Management
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/collaborator/analytics") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/collaborator/analytics">
                      <BarChart className="mr-2 h-4 w-4" />
                      Analytics
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Admin Features - Only show if user is an admin */}
            {userRole === "admin" && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Admin Features</h3>
                <div className="space-y-1">
                  <Button
                    variant={pathname.includes("/dashboard/admin/users") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/admin/users">
                      <Users className="mr-2 h-4 w-4" />
                      User Management
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/admin/approvals") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/admin/approvals">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Collaborator Approvals
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/admin/categories") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/admin/categories">
                      <FolderPlus className="mr-2 h-4 w-4" />
                      Categories
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/admin/analytics") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/admin/analytics">
                      <BarChart className="mr-2 h-4 w-4" />
                      System Analytics
                    </Link>
                  </Button>
                  <Button
                    variant={pathname.includes("/dashboard/admin/announcements") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="/dashboard/admin/announcements">
                      <Bell className="mr-2 h-4 w-4" />
                      Announcements
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Chat System - Show for all users */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Communication</h3>
              <div className="space-y-1">
                <Button
                  variant={pathname.includes(`/dashboard/${userRole}/chat`) ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={`/dashboard/${userRole}/chat`}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-background/50 md:ml-0">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
