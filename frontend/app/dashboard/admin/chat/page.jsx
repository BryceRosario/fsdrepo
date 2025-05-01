import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Send, Paperclip, ImageIcon, Smile } from "lucide-react"
import DashboardLayout from "../../layout"

export default function AdminChatPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Chat</h1>
        <p className="text-muted-foreground">Communicate with team members and users</p>
      </div>

      <div className="flex h-[calc(100vh-220px)]">
        {/* Contacts Sidebar */}
        <div className="w-64 border-r border-border hidden md:block">
          <div className="p-4">
            <Input placeholder="Search contacts..." className="mb-4" />
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Team</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-md bg-primary/10 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary">SK</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Dr. Sarah Kim</p>
                  <p className="text-xs text-muted-foreground truncate">We need to review the new applications</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-muted-foreground">2m</span>
                  <span className="w-2 h-2 bg-primary rounded-full mt-1"></span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary">RK</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Robert King</p>
                  <p className="text-xs text-muted-foreground truncate">The system update is scheduled for tonight</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-muted-foreground">1h</span>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-medium text-muted-foreground mt-6 mb-3">Collaborators</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/20 text-primary">TC</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">TechCorp</p>
                  <p className="text-xs text-muted-foreground truncate">Our application is still pending</p>
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
                <AvatarFallback className="bg-primary/20 text-primary">SK</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Dr. Sarah Kim</p>
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
            <div className="flex items-start gap-3 max-w-[80%]">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">SK</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">
                    Hi Admin, we have several new collaborator applications that need review. Can you take a look at
                    them today?
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">AD</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm">Yes, I'll review them this afternoon. How many applications are pending?</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-right">10:32 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-[80%]">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">SK</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">
                    There are 12 pending applications, and 5 of them have been waiting for more than 48 hours. We should
                    prioritize those.
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary">AD</AvatarFallback>
              </Avatar>
              <div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm">I'll start with those 5 urgent ones. Can you send me their details?</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-right">10:36 AM</p>
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
