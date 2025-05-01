import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Testimonials Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                Trusted by <span className="text-primary">Thousands</span>
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our customers have to say about our platform and how it has transformed their businesses.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl bg-card/50 p-8 rounded-lg border border-border">
              <div className="flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-primary/40 mb-6" />
                <p className="text-xl md:text-2xl text-foreground italic mb-8">
                  "This platform has completely revolutionized how we approach our business. The AI-powered tools have
                  given us insights we never thought possible, and the customer support team has been exceptional every
                  step of the way. We've seen our productivity increase by 300% since implementation."
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">JD</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-lg">James Davidson</p>
                    <p className="text-muted-foreground">CEO, TechInnovate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              <TestimonialCard
                quote="The AI-powered analytics have given us insights we never thought possible. Game-changing for our decision making."
                author="David Kim"
                role="Data Scientist, AnalyticsPro"
              />
              <TestimonialCard
                quote="Integration was seamless and the onboarding process was incredibly smooth. We were up and running in days."
                author="Jessica Martinez"
                role="COO, FastTrack Solutions"
              />
              <TestimonialCard
                quote="The security features give us peace of mind knowing our sensitive data is protected at all times."
                author="Robert Wilson"
                role="CISO, SecureFinance"
              />
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                Video <span className="text-primary">Testimonials</span>
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear directly from our customers about their experiences.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card/50 rounded-lg border border-border overflow-hidden">
                <div className="aspect-video bg-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="rounded-full bg-primary/20 p-3 inline-block">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-foreground/80">Video Testimonial</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise Success Story</h3>
                  <p className="text-muted-foreground mb-4">
                    How GlobalCorp increased efficiency by 45% using our platform.
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">AC</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Alex Chen</p>
                      <p className="text-sm text-muted-foreground">CTO, GlobalCorp</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg border border-border overflow-hidden">
                <div className="aspect-video bg-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="rounded-full bg-primary/20 p-3 inline-block">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-foreground/80">Video Testimonial</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Startup Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    How NeoStartup scaled from 10 to 1000 customers in 6 months.
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">LJ</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Lisa Johnson</p>
                      <p className="text-sm text-muted-foreground">Founder, NeoStartup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Join our <span className="text-primary">success stories</span>
              </h2>
              <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your journey today and become our next success story.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/20 text-foreground hover:bg-primary/10"
                >
                  <Link href="/contact">Request a Demo</Link>
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
