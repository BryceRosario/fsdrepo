import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Send, Paperclip, ImageIcon, Smile } from "lucide-react"
import DashboardLayout from "../../layout"

export default function CollaboratorChatPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Chat</h1>
        <p className="text-muted-foreground">Communicate with students and mentors</p>
      </div>

      <div className="flex h-[calc(100vh-220px)]">
        {/* Contacts Sidebar */}
        <div className="w-64 border-r border-border hidden md:block">
          <div className="p-4">
            <Input placeholder="Search contacts..." className="mb-4" />
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Students</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-md bg-primary/10 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">Thank you for the opportunity</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-muted-foreground">2m</span>
                  <span className="w-2 h-2 bg-primary rounded-full mt-1"></span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary">EJ</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Emily Johnson</p>
                  <p className="text-xs text-muted-foreground truncate">I have a question about the internship</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-muted-foreground">1h</span>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-medium text-muted-foreground mt-6 mb-3">Mentors</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary">SK</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Dr. Sarah Kim</p>
                  <p className="text-xs text-muted-foreground truncate">The students are making good progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">TC</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm">
                    Hello John, we're pleased to inform you that your application for the AI Research Internship has
                    been accepted.
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-right">10:30 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-[80%]">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">
                    That's fantastic news! Thank you so much for the opportunity. When do I start?
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">10:32 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">TC</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm">
                    The internship begins on June 1st. We'll be sending you an onboarding package with all the details
                    by the end of this week.
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-right">10:35 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-[80%]">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">
                    Thank you for the opportunity. I'm looking forward to working with your team!
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">10:36 AM</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button variant="ghost" size="icon">
                <Smile className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
