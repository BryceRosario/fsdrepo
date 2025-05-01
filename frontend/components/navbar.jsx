"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </span>
            <span className="font-bold text-xl text-foreground tracking-tight">TISD</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link
              href="/features/student"
              className={`text-sm font-medium ${isActive("/features/student") ? "text-primary" : "text-foreground/80 hover:text-primary"} transition-colors`}
            >
              Student
            </Link>
            <Link
              href="/features/mentor"
              className={`text-sm font-medium ${isActive("/features/mentor") ? "text-primary" : "text-foreground/80 hover:text-primary"} transition-colors`}
            >
              Mentor
            </Link>
            <Link
              href="/features/collaborator"
              className={`text-sm font-medium ${isActive("/features/collaborator") ? "text-primary" : "text-foreground/80 hover:text-primary"} transition-colors`}
            >
              Collaborator
            </Link>
            <Link
              href="/ai-tools"
              className={`text-sm font-medium ${isActive("/ai-tools") ? "text-primary" : "text-foreground/80 hover:text-primary"} transition-colors`}
            >
              AI Tools
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium ${isActive("/contact") ? "text-primary" : "text-foreground/80 hover:text-primary"} transition-colors`}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild className="text-foreground/80 hover:text-primary hover:bg-background">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden border-border">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/features/student"
                  className={`text-lg font-medium ${isActive("/features/student") ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Student
                </Link>
                <Link
                  href="/features/mentor"
                  className={`text-lg font-medium ${isActive("/features/mentor") ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Mentor
                </Link>
                <Link
                  href="/features/collaborator"
                  className={`text-lg font-medium ${isActive("/features/collaborator") ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Collaborator
                </Link>
                <Link
                  href="/ai-tools"
                  className={`text-lg font-medium ${isActive("/ai-tools") ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  AI Tools
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium ${isActive("/contact") ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild className="w-full border-border">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Log In
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
