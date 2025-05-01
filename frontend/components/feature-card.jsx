import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function FeatureCard({ icon, title, description }) {
  return (
    <Card className="transition-all hover:shadow-md bg-card/50 border-border hover:border-primary/20 group">
      <CardHeader className="pb-2">
        <div className="mb-2 group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
