import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IdeaGenerator from "@/components/idea-generator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Sparkles } from "lucide-react"

export default function AIToolsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* AI Tools Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                AI <span className="text-primary">Idea Generator</span> & Evaluator
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Generate innovative solutions to your challenges or evaluate your existing ideas with our AI tools.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* AI Tools Main Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <IdeaGenerator />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                How It <span className="text-primary">Works</span>
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI tools use advanced algorithms to generate and evaluate ideas with remarkable accuracy.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background/50 p-6 rounded-lg border border-border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Input Your Challenge</h3>
                <p className="text-muted-foreground">
                  Describe the problem or challenge you're facing in detail. The more specific you are, the better the
                  AI can understand your needs.
                </p>
              </div>

              <div className="bg-background/50 p-6 rounded-lg border border-border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Processing</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your input, drawing on vast knowledge of industry trends, research, and
                  successful case studies to generate solutions.
                </p>
              </div>

              <div className="bg-background/50 p-6 rounded-lg border border-border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Review Results</h3>
                <p className="text-muted-foreground">
                  Receive detailed solutions or evaluations with scores for feasibility, impact, and scalability, along
                  with actionable feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                Success <span className="text-primary">Stories</span>
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our AI tools have helped businesses innovate and succeed.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold">TechInnovate Breakthrough</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We were stuck on a complex technical challenge for months. The AI Idea Generator provided a solution
                  approach we hadn't considered, which ultimately led to our flagship product."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-primary">MJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Mark Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, TechInnovate</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold">EcoSolutions Validation</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The AI Evaluator helped us refine our initial concept by identifying scalability challenges we hadn't
                  considered. After addressing these issues, we secured $2M in funding."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-primary">AR</span>
                  </div>
                  <div>
                    <p className="font-medium">Amelia Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Founder, EcoSolutions</p>
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
                Ready to <span className="text-primary">innovate</span>?
              </h2>
              <p className="max-w-[85%] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start generating and evaluating ideas today to transform your business.
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
                  <Link href="/contact">Learn More</Link>
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
