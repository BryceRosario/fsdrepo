"use client"

import { useState, useRef, useEffect } from "react"
import DashboardLayout from "../layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Send, User, Search, Phone, Video } from "lucide-react"

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState("john-doe")
  const [message, setMessage] = useState("")
  const [chats, setChats] = useState({
    "john-doe": [
      { sender: "other", content: "Hi there! How can I help you with your project today?", time: "09:30 AM" },
      { sender: "self", content: "I'm having trouble with the database integration. Can you help?", time: "09:32 AM" },
      { sender: "other", content: "Of course! What specific issues are you facing?", time: "09:33 AM" },
    ],
    "sarah-kim": [
      { sender: "other", content: "Your progress on the AI module looks great!", time: "Yesterday" },
      { sender: "self", content: "Thanks! I've been working hard on it.", time: "Yesterday" },
      { sender: "other", content: "Let's schedule a review session next week.", time: "Yesterday" },
    ],
    "tech-support": [
      { sender: "other", content: "Welcome to Tech Support! How can we assist you today?", time: "2 days ago" },
      { sender: "self", content: "I can't access the resource library.", time: "2 days ago" },
      { sender: "other", content: "Let me check your permissions. One moment please...", time: "2 days ago" },
    ],
    "project-team": [
      { sender: "other", content: "Team meeting scheduled for tomorrow at 10 AM.", time: "Monday" },
      { sender: "self", content: "I'll be there. Should I prepare anything?", time: "Monday" },
      { sender: "other", content: "Just bring your progress update for the week.", time: "Monday" },
    ],
  })

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chats, activeChat])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage = {
      sender: "self",
      content: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChats((prev) => ({
      ...prev,
      [activeChat]: [...prev[activeChat], newMessage],
    }))

    setMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      const responseMessage = {
        sender: "other",
        content: "Thanks for your message! I'll get back to you shortly.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setChats((prev) => ({
        ...prev,
        [activeChat]: [...prev[activeChat], responseMessage],
      }))
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Chat</h1>
        <p className="text-muted-foreground">Communicate with mentors, students, and team members</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-220px)]">
        {/* Chat Sidebar */}
        <Card className="bg-card/50 border-border lg:col-span-1 h-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative mt-2">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search chats..." className="pl-8 bg-background" />
            </div>
          </CardHeader>
          <CardContent className="p-2 overflow-auto h-[calc(100%-80px)]">
            <Tabs defaultValue="direct" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="direct">Direct</TabsTrigger>
                <TabsTrigger value="groups">Groups</TabsTrigger>
              </TabsList>
              <TabsContent value="direct" className="space-y-2">
                <Button
                  variant={activeChat === "john-doe" ? "secondary" : "ghost"}
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => setActiveChat("john-doe")}
                >
                  <div className="flex items-center w-full">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-sm">John Doe</p>
                        <span className="text-xs text-muted-foreground">09:33 AM</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate w-40">
                        Of course! What specific issues are you facing?
                      </p>
                    </div>
                  </div>
                </Button>
                <Button
                  variant={activeChat === "sarah-kim" ? "secondary" : "ghost"}
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => setActiveChat("sarah-kim")}
                >
                  <div className="flex items-center w-full">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/20 text-primary">SK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-sm">Sarah Kim</p>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate w-40">
                        Let's schedule a review session next week.
                      </p>
                    </div>
                  </div>
                </Button>
                <Button
                  variant={activeChat === "tech-support" ? "secondary" : "ghost"}
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => setActiveChat("tech-support")}
                >
                  <div className="flex items-center w-full">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/20 text-primary">TS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-sm">Tech Support</p>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate w-40">
                        Let me check your permissions. One moment please...
                      </p>
                    </div>
                  </div>
                </Button>
              </TabsContent>
              <TabsContent value="groups" className="space-y-2">
                <Button
                  variant={activeChat === "project-team" ? "secondary" : "ghost"}
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => setActiveChat("project-team")}
                >
                  <div className="flex items-center w-full">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary/20 text-primary">PT</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-sm">Project Team</p>
                        <span className="text-xs text-muted-foreground">Monday</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate w-40">
                        Just bring your progress update for the week.
                      </p>
                    </div>
                  </div>
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Chat Main */}
        <Card className="bg-card/50 border-border lg:col-span-3 h-full flex flex-col">
          <CardHeader className="pb-2 border-b border-border">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {activeChat === "john-doe" && "JD"}
                    {activeChat === "sarah-kim" && "SK"}
                    {activeChat === "tech-support" && "TS"}
                    {activeChat === "project-team" && "PT"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">
                    {activeChat === "john-doe" && "John Doe"}
                    {activeChat === "sarah-kim" && "Sarah Kim"}
                    {activeChat === "tech-support" && "Tech Support"}
                    {activeChat === "project-team" && "Project Team"}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {activeChat === "john-doe" && "Mentor • Online"}
                    {activeChat === "sarah-kim" && "Lead Developer • Away"}
                    {activeChat === "tech-support" && "Support Team • Online"}
                    {activeChat === "project-team" && "5 members • 3 online"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            {chats[activeChat].map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "self" ? "justify-end" : "justify-start"}`}>
                {msg.sender === "other" && (
                  <Avatar className="h-8 w-8 mr-2 mt-1">
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {activeChat === "john-doe" && "JD"}
                      {activeChat === "sarah-kim" && "SK"}
                      {activeChat === "tech-support" && "TS"}
                      {activeChat === "project-team" && "PT"}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    msg.sender === "self" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p
                    className={`text-xs mt-1 ${msg.sender === "self" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>
          <div className="p-4 border-t border-border">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-background"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
