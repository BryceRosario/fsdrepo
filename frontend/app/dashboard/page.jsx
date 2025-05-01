"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardRedirect() {
  const router = useRouter()

  useEffect(() => {
    // In a real application, you would check the user's role from a session or context
    // For now, we'll redirect to the student dashboard as default
    router.push("/dashboard/student")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to your dashboard...</p>
    </div>
  )
}
