import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export default function TestimonialCard({ quote, author, role }) {
  return (
    <Card className="transition-all hover:shadow-md bg-background/50 border-border hover:border-primary/20">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-primary/40 mb-2" />
        <p className="text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="border-t border-border w-full pt-4">
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
