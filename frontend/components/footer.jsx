import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </span>
              <span className="font-bold text-xl text-foreground">TISD</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into reality with powerful tools and expert guidance.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-foreground/80 hover:text-primary hover:bg-background"
              >
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-foreground/80 hover:text-primary hover:bg-background"
              >
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-foreground/80 hover:text-primary hover:bg-background"
              >
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-foreground/80 hover:text-primary hover:bg-background"
              >
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Subscribe</h3>
            <p className="text-sm text-muted-foreground">Stay updated with our latest news and offers.</p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                type="email"
                className="max-w-[220px] bg-background border-border focus-visible:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TISD. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
