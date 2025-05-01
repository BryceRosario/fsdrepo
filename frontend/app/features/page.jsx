import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureCard from "@/components/feature-card"
import { Globe, Zap, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Features Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                Powerful <span className="text-primary">Features</span>
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers everything you need to succeed in today's competitive landscape.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Global Reach"
                description="Connect with customers around the world with our powerful global infrastructure. Expand your business to new markets with ease."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Lightning Fast"
                description="Experience blazing fast performance with our optimized platform. Quick load times and responsive interfaces enhance user experience."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-primary" />}
                title="24/7 Support"
                description="Our dedicated team is available around the clock to assist you. Get help whenever you need it, no matter your time zone."
              />
              <FeatureCard
                icon={<CheckCircle className="h-10 w-10 text-primary" />}
                title="Reliable Service"
                description="Count on our 99.9% uptime guarantee for your critical applications. Our robust infrastructure ensures your services stay online."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Easy Integration"
                description="Seamlessly integrate with your existing tools and workflows. Our API and pre-built connectors make integration simple."
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Scalable Solutions"
                description="Grow your business with confidence using our scalable infrastructure. Our platform grows with you, from startup to enterprise."
              />
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                Advanced <span className="text-primary">Capabilities</span>
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the advanced features that set our platform apart from the competition.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Analytics</h3>
                <p className="text-muted-foreground">
                  Harness the power of artificial intelligence to gain deeper insights into your data. Our AI analytics
                  tools help you identify patterns, predict trends, and make data-driven decisions with confidence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Predictive analytics and forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Anomaly detection and alerts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Automated reporting and insights</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Protect your sensitive data with our enterprise-grade security features. We implement the latest
                  security protocols and compliance standards to keep your information safe and secure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Multi-factor authentication</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Regular security audits and compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Ready to experience these <span className="text-primary">features</span>?
              </h2>
              <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your free trial today and discover how our platform can transform your business.
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
