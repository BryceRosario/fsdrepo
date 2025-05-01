import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <div className="container flex h-16 items-center">
        <Link href="/login" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Login</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-md space-y-6 p-6">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-primary-foreground">T</span>
            </div>
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-muted-foreground">Enter your email to receive a password reset link</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Reset Link</Button>
            </CardFooter>
          </Card>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-full border-t border-muted" />
              <span className="absolute px-3 text-xs text-muted-foreground bg-muted/30">Need Help?</span>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="/help" className="text-sm text-muted-foreground hover:text-primary">
                Help Center
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact Support
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} TISD. All rights reserved.</p>
      </footer>
    </div>
  )
}
