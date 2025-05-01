"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"

export default function SignupPage() {
  const [role, setRole] = useState("student")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard or confirmation page
      window.location.href = "/dashboard/overview"
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 p-6">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-primary-foreground">T</span>
            </div>
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">Enter your information to get started</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Select Role</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="justify-center border-primary/20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-state={role === "student" ? "active" : "inactive"}
                  onClick={() => setRole("student")}
                >
                  Student
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="justify-center border-primary/20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-state={role === "mentor" ? "active" : "inactive"}
                  onClick={() => setRole("mentor")}
                >
                  Mentor
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="justify-center border-primary/20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-state={role === "collaborator" ? "active" : "inactive"}
                  onClick={() => setRole("collaborator")}
                >
                  Collaborator
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="justify-center border-primary/20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  data-state={role === "admin" ? "active" : "inactive"}
                  onClick={() => setRole("admin")}
                >
                  Admin
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" type="email" required />
            </div>

            {role === "student" && (
              <div className="space-y-2">
                <Label htmlFor="student-id">Student ID</Label>
                <Input id="student-id" placeholder="Enter your student ID" required />
              </div>
            )}

            {role === "mentor" && (
              <div className="space-y-2">
                <Label htmlFor="mentor-id">Mentor ID</Label>
                <Input id="mentor-id" placeholder="Enter your mentor ID" required />
              </div>
            )}

            {role === "collaborator" && (
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" placeholder="Your company or organization" required />
              </div>
            )}

            {role === "admin" && (
              <div className="space-y-2">
                <Label htmlFor="admin-code">Admin Access Code</Label>
                <Input id="admin-code" type="password" placeholder="Enter admin access code" required />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">Google</Button>
            <Button variant="outline">GitHub</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
