import { Calendar, ChevronLeft, ChevronRight, Plus, Clock, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import DashboardLayout from "../layout"
import Link from "next/link"

export default function CalendarPage() {
  // Current month and year for the calendar display
  const currentMonth = "April"
  const currentYear = 2025

  return (
    <DashboardLayout activeTab="calendar">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and project timelines</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-border">
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button variant="outline" size="sm" className="border-border font-medium">
            {currentMonth} {currentYear}
          </Button>
          <Button variant="outline" size="sm" className="border-border">
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
          <Button className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/dashboard/calendar/new-event">
              <Plus className="h-4 w-4" /> Add Event
            </Link>
          </Button>
        </div>
      </div>

      {/* Calendar View */}
      <Card className="bg-card/50 border-border mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            <div className="text-sm font-medium text-muted-foreground py-2">Sun</div>
            <div className="text-sm font-medium text-muted-foreground py-2">Mon</div>
            <div className="text-sm font-medium text-muted-foreground py-2">Tue</div>
            <div className="text-sm font-medium text-muted-foreground py-2">Wed</div>
            <div className="text-sm font-medium text-muted-foreground py-2">Thu</div>
            <div className="text-sm font-medium text-muted-foreground py-2">Fri</div>
            <div className="text-sm font-medium text-muted-foreground py-2">Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {/* Previous month days */}
            <div className="min-h-[100px] p-1 border border-border/50 rounded-md bg-background/30 opacity-50">
              <div className="text-sm text-muted-foreground">30</div>
            </div>
            <div className="min-h-[100px] p-1 border border-border/50 rounded-md bg-background/30 opacity-50">
              <div className="text-sm text-muted-foreground">31</div>
            </div>

            {/* Current month days */}
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`min-h-[100px] p-1 border border-border/50 rounded-md ${
                  day === 15 ? "bg-primary/5 border-primary/30" : "bg-background/30"
                } hover:border-primary/20 transition-colors`}
              >
                <div className="text-sm font-medium">{day}</div>
                {day === 3 && (
                  <div className="mt-1 p-1 bg-primary/10 rounded text-xs border border-primary/20">
                    <div className="font-medium text-primary">Team Meeting</div>
                    <div className="text-muted-foreground">9:00 AM</div>
                  </div>
                )}
                {day === 10 && (
                  <div className="mt-1 p-1 bg-blue-500/10 rounded text-xs border border-blue-500/20">
                    <div className="font-medium text-blue-500">Project Review</div>
                    <div className="text-muted-foreground">2:00 PM</div>
                  </div>
                )}
                {day === 15 && (
                  <div className="mt-1 p-1 bg-green-500/10 rounded text-xs border border-green-500/20">
                    <div className="font-medium text-green-500">Project Deadline</div>
                    <div className="text-muted-foreground">All Day</div>
                  </div>
                )}
                {day === 22 && (
                  <div className="mt-1 p-1 bg-yellow-500/10 rounded text-xs border border-yellow-500/20">
                    <div className="font-medium text-yellow-500">Client Meeting</div>
                    <div className="text-muted-foreground">11:00 AM</div>
                  </div>
                )}
              </div>
            ))}

            {/* Next month days */}
            <div className="min-h-[100px] p-1 border border-border/50 rounded-md bg-background/30 opacity-50">
              <div className="text-sm text-muted-foreground">1</div>
            </div>
            <div className="min-h-[100px] p-1 border border-border/50 rounded-md bg-background/30 opacity-50">
              <div className="text-sm text-muted-foreground">2</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-md">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">Project Deadline: Adaptive Learning Environment</h3>
                      <p className="text-sm text-muted-foreground mt-1">April 15, 2025 • All Day</p>
                    </div>
                    <Badge className="w-fit bg-green-500/20 text-green-500 hover:bg-green-500/30">
                      Project Deadline
                    </Badge>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>All Day</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>3 Team Members</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Remote</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">EM</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">TK</AvatarFallback>
                      </Avatar>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/dashboard/calendar/event-details">View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-md">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">Project Review: AI-Powered Resource Allocation</h3>
                      <p className="text-sm text-muted-foreground mt-1">April 10, 2025 • 2:00 PM - 3:30 PM</p>
                    </div>
                    <Badge className="w-fit bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">Project Review</Badge>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>1.5 Hours</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>5 Participants</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Conference Room A</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">SK</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">LM</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">+2</AvatarFallback>
                      </Avatar>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/dashboard/calendar/event-details">View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-md">
                  <Calendar className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">Client Meeting: Knowledge Sharing Platform</h3>
                      <p className="text-sm text-muted-foreground mt-1">April 22, 2025 • 11:00 AM - 12:00 PM</p>
                    </div>
                    <Badge className="w-fit bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">
                      Client Meeting
                    </Badge>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>1 Hour</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>4 Participants</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Virtual (Zoom)</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">RK</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">CL</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs bg-primary/20 text-primary">MJ</AvatarFallback>
                      </Avatar>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/dashboard/calendar/event-details">View Details</Link>
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
