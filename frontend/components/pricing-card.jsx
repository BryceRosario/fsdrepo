import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"

export default function PricingCard({ title, price, description, features, buttonText, popular = false }) {
  return (
    <Card
      className={`transition-all bg-card/50 border-border ${popular ? "border-primary shadow-md relative" : "hover:shadow-md hover:border-primary/20"}`}
    >
      {popular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground ml-1">/month</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-background text-foreground hover:bg-background/80 border border-border"}`}
          variant={popular ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
