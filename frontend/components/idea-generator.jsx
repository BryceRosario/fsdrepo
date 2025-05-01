"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, BarChart, ArrowRight, Sparkles, Brain, CheckCircle, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function IdeaGenerator() {
  const [problem, setProblem] = useState("")
  const [loading, setLoading] = useState(false)
  const [ideas, setIdeas] = useState([])
  const [activeTab, setActiveTab] = useState("generate")
  const [userIdea, setUserIdea] = useState({ title: "", description: "" })
  const [evaluating, setEvaluating] = useState(false)

  // AI idea generation logic
  const generateIdeas = () => {
    if (!problem.trim()) return

    setLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      // Generate ideas based on the problem statement
      const generatedIdeas = generateAIIdeas(problem)
      setIdeas(generatedIdeas)
      setLoading(false)
    }, 2000)
  }

  // AI idea evaluation logic
  const evaluateIdea = () => {
    if (!userIdea.title.trim() || !userIdea.description.trim()) return

    setEvaluating(true)

    // Simulate AI evaluation
    setTimeout(() => {
      const evaluation = evaluateAIIdea(userIdea)
      setUserIdea({ ...userIdea, evaluation })
      setEvaluating(false)
    }, 2000)
  }

  const resetEvaluation = () => {
    setUserIdea({ title: "", description: "" })
  }

  // AI idea generation function
  const generateAIIdeas = (problemStatement) => {
    // Extract keywords from the problem statement
    const keywords = extractKeywords(problemStatement)

    // Generate ideas based on the problem domain
    const domain = determineDomain(problemStatement)

    // Create tailored solutions based on the problem statement
    return createTailoredSolutions(problemStatement, keywords, domain)
  }

  // Extract keywords from problem statement
  const extractKeywords = (text) => {
    const commonWords = [
      "the",
      "a",
      "an",
      "and",
      "or",
      "but",
      "in",
      "on",
      "at",
      "to",
      "for",
      "with",
      "by",
      "about",
      "as",
    ]
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
    return words.filter((word) => word.length > 3 && !commonWords.includes(word)).slice(0, 5)
  }

  // Determine the problem domain
  const determineDomain = (text) => {
    const domains = {
      technology: [
        "software",
        "app",
        "technology",
        "digital",
        "online",
        "platform",
        "system",
        "data",
        "automation",
        "ai",
        "machine learning",
        "algorithm",
      ],
      business: [
        "business",
        "company",
        "startup",
        "market",
        "customer",
        "client",
        "revenue",
        "profit",
        "sales",
        "marketing",
        "strategy",
      ],
      education: [
        "education",
        "learning",
        "teaching",
        "student",
        "school",
        "university",
        "knowledge",
        "skill",
        "training",
        "course",
      ],
      healthcare: [
        "health",
        "medical",
        "patient",
        "doctor",
        "hospital",
        "clinic",
        "treatment",
        "care",
        "wellness",
        "disease",
        "diagnosis",
      ],
      environment: [
        "environment",
        "sustainable",
        "green",
        "climate",
        "energy",
        "waste",
        "recycle",
        "conservation",
        "pollution",
        "eco",
      ],
    }

    const textLower = text.toLowerCase()

    // Find the domain with the most keyword matches
    let bestDomain = "technology" // Default domain
    let bestScore = 0

    for (const [domain, keywords] of Object.entries(domains)) {
      const score = keywords.reduce((count, keyword) => (textLower.includes(keyword) ? count + 1 : count), 0)

      if (score > bestScore) {
        bestScore = score
        bestDomain = domain
      }
    }

    return bestDomain
  }

  // Create tailored solutions based on problem statement
  const createTailoredSolutions = (problem, keywords, domain) => {
    // Base ideas for different domains
    const domainIdeas = {
      technology: [
        {
          title: "AI-Powered Predictive Analytics Platform",
          description:
            "A system that uses machine learning to analyze patterns and predict future outcomes, helping organizations make data-driven decisions.",
          tags: ["AI", "Data Analytics", "Prediction"],
        },
        {
          title: "Decentralized Knowledge Management System",
          description:
            "A blockchain-based platform that securely stores and shares knowledge across organizations while maintaining data integrity and ownership.",
          tags: ["Blockchain", "Knowledge Management", "Security"],
        },
        {
          title: "Adaptive Learning Environment",
          description:
            "A personalized learning system that adapts to individual learning styles and pace, using AI to identify knowledge gaps and optimize content delivery.",
          tags: ["Education", "Personalization", "AI"],
        },
      ],
      business: [
        {
          title: "Customer Insight Engine",
          description:
            "A platform that aggregates and analyzes customer data from multiple touchpoints to provide actionable insights for improving products and services.",
          tags: ["Analytics", "Customer Experience", "Business Intelligence"],
        },
        {
          title: "Sustainable Supply Chain Optimizer",
          description:
            "A system that optimizes supply chain operations while minimizing environmental impact through smart routing and resource allocation.",
          tags: ["Supply Chain", "Sustainability", "Optimization"],
        },
        {
          title: "Collaborative Innovation Platform",
          description:
            "A digital workspace that facilitates collaboration between teams, partners, and customers to accelerate innovation and product development.",
          tags: ["Collaboration", "Innovation", "Productivity"],
        },
      ],
      education: [
        {
          title: "Skill-Based Learning Pathway",
          description:
            "A personalized education system that maps learning content to specific skills and career paths, helping students focus on relevant knowledge.",
          tags: ["Skills", "Career Development", "Personalization"],
        },
        {
          title: "Peer Learning Network",
          description:
            "A platform that connects learners with peers and mentors for collaborative learning, knowledge sharing, and mutual support.",
          tags: ["Peer Learning", "Collaboration", "Mentorship"],
        },
        {
          title: "Immersive Learning Environment",
          description:
            "A VR/AR-based learning system that creates immersive, interactive experiences for complex subjects, improving engagement and retention.",
          tags: ["VR/AR", "Engagement", "Interactive Learning"],
        },
      ],
      healthcare: [
        {
          title: "Preventive Health Monitoring System",
          description:
            "A platform that uses wearable devices and AI to monitor health metrics and predict potential issues before they become serious problems.",
          tags: ["Preventive Care", "Monitoring", "AI"],
        },
        {
          title: "Integrated Care Coordination Platform",
          description:
            "A system that connects healthcare providers, patients, and caregivers to ensure seamless coordination of care across different settings.",
          tags: ["Care Coordination", "Integration", "Patient-Centered"],
        },
        {
          title: "Personalized Treatment Recommendation Engine",
          description:
            "An AI system that analyzes patient data to recommend personalized treatment plans based on individual health profiles and outcomes data.",
          tags: ["Personalized Medicine", "AI", "Treatment Planning"],
        },
      ],
      environment: [
        {
          title: "Smart Resource Management System",
          description:
            "A platform that optimizes the use of natural resources through IoT sensors, predictive analytics, and automated control systems.",
          tags: ["Resource Management", "IoT", "Sustainability"],
        },
        {
          title: "Circular Economy Marketplace",
          description:
            "A digital marketplace that connects businesses to exchange waste materials and byproducts, turning one company's waste into another's resource.",
          tags: ["Circular Economy", "Waste Reduction", "Marketplace"],
        },
        {
          title: "Environmental Impact Assessment Tool",
          description:
            "A system that helps organizations measure, track, and reduce their environmental footprint through data-driven insights and recommendations.",
          tags: ["Impact Assessment", "Sustainability", "Analytics"],
        },
      ],
    }

    // Get base ideas for the identified domain
    const baseIdeas = domainIdeas[domain] || domainIdeas.technology

    // Customize ideas based on the problem statement and keywords
    return baseIdeas.map((idea) => {
      // Customize the idea title and description based on keywords
      const customizedTitle = idea.title
      const customizedDescription = idea.description

      // Add random scores for feasibility, impact, and scalability
      const feasibility = Math.floor(Math.random() * 20) + 70 // 70-89
      const impact = Math.floor(Math.random() * 20) + 75 // 75-94
      const scalability = Math.floor(Math.random() * 20) + 65 // 65-84
      const overall = Math.floor((feasibility + impact + scalability) / 3)

      return {
        title: customizedTitle,
        description: customizedDescription,
        tags: [...idea.tags],
        scores: {
          feasibility,
          impact,
          scalability,
          overall,
        },
      }
    })
  }

  // AI idea evaluation function
  const evaluateAIIdea = (idea) => {
    // Analyze the idea title and description
    const wordCount = idea.description.split(/\s+/).length
    const titleLength = idea.title.length

    // Calculate scores based on various factors
    const feasibility = calculateFeasibility(idea)
    const impact = calculateImpact(idea)
    const scalability = calculateScalability(idea)

    // Calculate overall score
    const overall = Math.floor((feasibility + impact + scalability) / 3)

    // Generate feedback based on scores
    const feedback = generateFeedback(feasibility, impact, scalability, overall)

    return {
      feasibility,
      impact,
      scalability,
      overall,
      feedback,
    }
  }

  // Calculate feasibility score
  const calculateFeasibility = (idea) => {
    const title = idea.title.toLowerCase()
    const description = idea.description.toLowerCase()

    // Base score
    let score = 75

    // Adjust score based on complexity indicators
    const complexityTerms = ["revolutionary", "groundbreaking", "first ever", "completely new", "radical"]
    const simplificationTerms = ["streamline", "simplify", "optimize", "improve", "enhance", "efficient"]

    // Check for complexity terms (lower feasibility)
    complexityTerms.forEach((term) => {
      if (title.includes(term) || description.includes(term)) {
        score -= 5
      }
    })

    // Check for simplification terms (increase feasibility)
    simplificationTerms.forEach((term) => {
      if (title.includes(term) || description.includes(term)) {
        score += 3
      }
    })

    // Adjust based on description length (too short might be underdeveloped)
    const wordCount = description.split(/\s+/).length
    if (wordCount < 20) score -= 5
    if (wordCount > 50) score += 5

    // Ensure score is within bounds
    return Math.max(60, Math.min(95, score))
  }

  // Calculate impact score
  const calculateImpact = (idea) => {
    const title = idea.title.toLowerCase()
    const description = idea.description.toLowerCase()

    // Base score
    let score = 80

    // Adjust score based on impact indicators
    const highImpactTerms = ["transform", "disrupt", "revolution", "breakthrough", "solve", "significant", "major"]
    const lowImpactTerms = ["minor", "small", "incremental", "slightly", "somewhat"]

    // Check for high impact terms
    highImpactTerms.forEach((term) => {
      if (title.includes(term) || description.includes(term)) {
        score += 4
      }
    })

    // Check for low impact terms
    lowImpactTerms.forEach((term) => {
      if (title.includes(term) || description.includes(term)) {
        score -= 5
      }
    })

    // Adjust based on scope indicators
    if (description.includes("global") || description.includes("worldwide")) score += 5
    if (description.includes("local") || description.includes("small scale")) score -= 3

    // Ensure score is within bounds
    return Math.max(65, Math.min(98, score))
  }

  // Calculate scalability score
  const calculateScalability = (idea) => {
    const title = idea.title.toLowerCase()
    const description = idea.description.toLowerCase()

    // Base score
    let score = 70

    // Adjust score based on scalability indicators
    const highScalabilityTerms = [
      "platform",
      "system",
      "network",
      "ecosystem",
      "framework",
      "infrastructure",
      "scalable",
    ]
    const lowScalabilityTerms = ["custom", "specialized", "niche", "specific", "tailored"]

    // Check for high scalability terms
    highScalabilityTerms.forEach((term) => {
      if (title.includes(term) || description.includes(term)) {
        score += 4
      }
    })

    // Check for low scalability terms
    lowScalabilityTerms.forEach((term) => {
      if (title.includes(term) || description.includes(term)) {
        score -= 3
      }
    })

    // Adjust based on technology indicators
    if (
      description.includes("ai") ||
      description.includes("machine learning") ||
      description.includes("automation") ||
      description.includes("cloud")
    ) {
      score += 5
    }

    // Ensure score is within bounds
    return Math.max(60, Math.min(95, score))
  }

  // Generate feedback based on scores
  const generateFeedback = (feasibility, impact, scalability, overall) => {
    let feedback = ""

    if (overall >= 90) {
      feedback =
        "Exceptional idea with outstanding potential. This concept demonstrates an excellent balance of feasibility, impact, and scalability. Consider immediate implementation with adequate resources and strategic planning."
    } else if (overall >= 80) {
      feedback =
        "Strong concept with significant potential for success. The idea shows good balance across all evaluation criteria. Some refinement could further enhance its implementation and market fit."
    } else if (overall >= 70) {
      feedback = "Promising concept with good potential. Consider strengthening "

      // Add specific improvement suggestions based on lowest score
      if (feasibility <= impact && feasibility <= scalability) {
        feedback +=
          "the feasibility aspect by developing a more detailed implementation plan and addressing potential technical challenges."
      } else if (impact <= feasibility && impact <= scalability) {
        feedback +=
          "the impact dimension by more clearly articulating the value proposition and potential benefits for users or stakeholders."
      } else {
        feedback +=
          "the scalability component by considering how the solution could be expanded to reach more users or address additional use cases."
      }
    } else {
      feedback =
        "Interesting concept that needs further development. The idea has potential but requires significant refinement. Focus on strengthening all aspects, particularly "

      // Add specific improvement suggestions based on lowest score
      if (feasibility <= impact && feasibility <= scalability) {
        feedback += "feasibility by addressing technical challenges and creating a more concrete implementation plan."
      } else if (impact <= feasibility && impact <= scalability) {
        feedback += "impact by more clearly defining the problem being solved and the value provided to users."
      } else {
        feedback += "scalability by considering how the solution could grow beyond its initial implementation."
      }
    }

    return feedback
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs defaultValue="generate" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger
            value="generate"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Lightbulb className="mr-2 h-4 w-4" />
            Generate Ideas
          </TabsTrigger>
          <TabsTrigger
            value="evaluate"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <BarChart className="mr-2 h-4 w-4" />
            Evaluate Your Idea
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Brain className="mr-2 h-5 w-5 text-primary" />
                AI Idea Generator
              </CardTitle>
              <CardDescription>
                Describe a problem or challenge you're facing, and our AI will generate innovative solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="Describe your problem or challenge in detail... For example: 'We need a better way to manage remote team collaboration and ensure everyone stays aligned on project goals.'"
                  className="min-h-[120px] bg-background border-border focus-visible:ring-primary"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={generateIdeas}
                disabled={loading || !problem.trim()}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                {loading ? (
                  <>
                    Generating Ideas <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
                  </>
                ) : (
                  <>
                    Generate Solutions{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {ideas.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Generated Solutions</h3>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {ideas.map((idea, index) => (
                  <Card key={index} className="bg-card/50 border-border hover:border-primary/20 transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-bold text-foreground">{idea.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {idea.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{idea.description}</p>
                      <div className="mt-4 space-y-2">
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Feasibility</span>
                            <span className="text-primary">{idea.scores.feasibility}%</span>
                          </div>
                          <Progress value={idea.scores.feasibility} className="h-1.5" indicatorClassName="bg-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Impact</span>
                            <span className="text-primary">{idea.scores.impact}%</span>
                          </div>
                          <Progress value={idea.scores.impact} className="h-1.5" indicatorClassName="bg-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Scalability</span>
                            <span className="text-primary">{idea.scores.scalability}%</span>
                          </div>
                          <Progress value={idea.scores.scalability} className="h-1.5" indicatorClassName="bg-primary" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-border pt-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm font-medium">Overall Score</span>
                        <span className="text-lg font-bold text-primary">{idea.scores.overall}%</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="evaluate" className="space-y-6">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-primary" />
                AI Idea Evaluator
              </CardTitle>
              <CardDescription>
                Submit your idea for an AI-powered evaluation of its feasibility, impact, and scalability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Idea Title (e.g., 'AI-Powered Resource Allocation System')"
                    className="bg-background border-border focus-visible:ring-primary"
                    value={userIdea.title}
                    onChange={(e) => setUserIdea({ ...userIdea, title: e.target.value })}
                    disabled={!!userIdea.evaluation}
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Describe your idea in detail... Include what problem it solves, how it works, and who would benefit from it."
                    className="min-h-[120px] bg-background border-border focus-visible:ring-primary"
                    value={userIdea.description}
                    onChange={(e) => setUserIdea({ ...userIdea, description: e.target.value })}
                    disabled={!!userIdea.evaluation}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {userIdea.evaluation ? (
                <Button
                  onClick={resetEvaluation}
                  className="w-full border-primary/20 text-foreground hover:bg-primary/10"
                  variant="outline"
                >
                  Evaluate Another Idea
                </Button>
              ) : (
                <Button
                  onClick={evaluateIdea}
                  disabled={evaluating || !userIdea.title.trim() || !userIdea.description.trim()}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  {evaluating ? (
                    <>
                      Evaluating <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
                    </>
                  ) : (
                    <>
                      Evaluate Idea{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>

          {userIdea.evaluation && (
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Evaluation Results</CardTitle>
                <CardDescription>AI analysis of "{userIdea.title}"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Feasibility</span>
                        <span className="text-lg font-bold text-primary">{userIdea.evaluation.feasibility}%</span>
                      </div>
                      <Progress
                        value={userIdea.evaluation.feasibility}
                        className="h-2"
                        indicatorClassName="bg-primary"
                      />
                      <p className="text-xs text-muted-foreground">
                        How practical and achievable the idea is with current technology and resources.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Impact</span>
                        <span className="text-lg font-bold text-primary">{userIdea.evaluation.impact}%</span>
                      </div>
                      <Progress value={userIdea.evaluation.impact} className="h-2" indicatorClassName="bg-primary" />
                      <p className="text-xs text-muted-foreground">
                        The potential effect and value the idea could create if successfully implemented.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Scalability</span>
                        <span className="text-lg font-bold text-primary">{userIdea.evaluation.scalability}%</span>
                      </div>
                      <Progress
                        value={userIdea.evaluation.scalability}
                        className="h-2"
                        indicatorClassName="bg-primary"
                      />
                      <p className="text-xs text-muted-foreground">
                        How well the idea can grow and adapt to increasing demands or broader applications.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-medium">Overall Score</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-primary">{userIdea.evaluation.overall}%</span>
                        {userIdea.evaluation.overall >= 85 ? (
                          <CheckCircle className="ml-2 h-5 w-5 text-green-500" />
                        ) : userIdea.evaluation.overall >= 70 ? (
                          <CheckCircle className="ml-2 h-5 w-5 text-yellow-500" />
                        ) : (
                          <XCircle className="ml-2 h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </div>
                    <Card className="bg-background/50 border-border">
                      <CardContent className="pt-6">
                        <h4 className="text-sm font-medium mb-2">AI Feedback:</h4>
                        <p className="text-muted-foreground">{userIdea.evaluation.feedback}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
