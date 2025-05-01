"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Globe, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import IdeaGenerator from "@/components/idea-generator"
import { DashboardModal } from "@/components/dashboard-modal"
import { useState } from "react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                    Transform Your <span className="text-primary">Ideas</span> into Reality
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform helps you bring your vision to life with powerful tools and expert guidance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    <Link href="/signup">
                      Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary/20 text-foreground hover:bg-primary/10"
                  >
                    <Link href="/features">Learn More</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-foreground/80">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <DashboardPreview />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Features Section */}
        <section className="py-16" id="features">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Powerful <span className="text-primary">Features</span>
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers everything you need to succeed in today's competitive landscape.
              </p>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Global Reach"
                description="Connect with customers around the world with our powerful global infrastructure."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Lightning Fast"
                description="Experience blazing fast performance with our optimized platform."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-primary" />}
                title="24/7 Support"
                description="Our dedicated team is available around the clock to assist you."
              />
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="outline" className="border-primary/20 text-foreground hover:bg-primary/10">
                <Link href="/features">
                  View All Features <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-card/50 py-16" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Trusted by <span className="text-primary">Thousands</span>
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our customers have to say about our platform.
              </p>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-3">
              <TestimonialCard
                quote="This platform has completely transformed our business operations. We've seen a 200% increase in productivity."
                author="Sarah Johnson"
                role="CEO, TechStart"
              />
              <TestimonialCard
                quote="The customer support is exceptional. Any issues we've had were resolved quickly and efficiently."
                author="Michael Chen"
                role="CTO, InnovateCorp"
              />
              <TestimonialCard
                quote="We've been able to scale our business rapidly thanks to the powerful features and reliability of this platform."
                author="Emily Rodriguez"
                role="Founder, GrowthLabs"
              />
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="outline" className="border-primary/20 text-foreground hover:bg-primary/10">
                <Link href="/testimonials">
                  Read More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Idea Generator & Evaluator Section (Replacing Pricing) */}
        <section className="py-16" id="ai-tools">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                AI <span className="text-primary">Idea Generator</span> & Evaluator
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Generate innovative solutions to your challenges or evaluate your existing ideas with our AI tools.
              </p>
            </div>
            <div className="mx-auto py-12">
              <IdeaGenerator />
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="outline" className="border-primary/20 text-foreground hover:bg-primary/10">
                <Link href="/ai-tools">
                  Explore More AI Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                Ready to <span className="text-primary">Get Started</span>?
              </h2>
              <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied customers and transform your business today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  <Link href="/signup">
                    Start Free Trial <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/20 text-foreground hover:bg-primary/10"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Dashboard Preview component with modal functionality
function DashboardPreview() {
  const [showDashboard, setShowDashboard] = useState(false)

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className="relative h-[350px] w-full max-w-[500px] rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-6 shadow-xl border border-primary/10 overflow-hidden cursor-pointer hover:border-primary/30 transition-colors"
          onClick={() => setShowDashboard(true)}
        >
          <div className="absolute inset-0 bg-card/30 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">T</span>
                </div>
                <span className="font-bold text-foreground">TISD Dashboard</span>
              </div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-primary/60"></div>
                <div className="h-3 w-3 rounded-full bg-primary/40"></div>
                <div className="h-3 w-3 rounded-full bg-primary/20"></div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="relative aspect-video rounded-md overflow-hidden border border-border">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="TISD Idea Visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-full">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background/40 p-3 rounded-md border border-border">
                  <h4 className="text-sm font-medium mb-1">Ideas Generated</h4>
                  <p className="text-2xl font-bold text-primary">247</p>
                </div>
                <div className="bg-background/40 p-3 rounded-md border border-border">
                  <h4 className="text-sm font-medium mb-1">Success Rate</h4>
                  <p className="text-2xl font-bold text-primary">89%</p>
                </div>
              </div>

              <div className="bg-background/40 p-3 rounded-md border border-border">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-medium">Current Project</h4>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Active</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">AI-Powered Resource Allocation System</p>
                <div className="w-full bg-muted/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-background/50 transition-opacity">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Open Dashboard</Button>
          </div>
        </div>
      </div>

      <DashboardModal open={showDashboard} onOpenChange={setShowDashboard} />
    </>
  )
}
