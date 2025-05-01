"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Contact Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or need assistance? We're here to help you every step of the way.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Us</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">
                        Your message has been received. We'll get back to you shortly.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Input
                            placeholder="First Name"
                            required
                            className="bg-background border-border focus-visible:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Input
                            placeholder="Last Name"
                            required
                            className="bg-background border-border focus-visible:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Input
                          type="email"
                          placeholder="Email"
                          required
                          className="bg-background border-border focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          type="tel"
                          placeholder="Phone (Optional)"
                          className="bg-background border-border focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Select>
                          <SelectTrigger className="bg-background border-border focus:ring-primary">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Textarea
                          placeholder="Your Message"
                          required
                          className="min-h-[120px] bg-background border-border focus-visible:ring-primary"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">support@tisd.com</p>
                        <p className="text-muted-foreground">info@tisd.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+91 22 2640 2928</p>
                        <p className="text-muted-foreground">Mon-Fri, 9AM-5PM IST</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Office</h3>
                        <p className="text-muted-foreground">FR CRCE College of Engineering</p>
                        <p className="text-muted-foreground">Bandra West, Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <div className="border-b border-border pb-4">
                      <h3 className="font-medium mb-2">How quickly can I get started?</h3>
                      <p className="text-muted-foreground">
                        You can sign up and start using our platform immediately. The onboarding process typically takes
                        less than 10 minutes.
                      </p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h3 className="font-medium mb-2">Do you offer custom solutions?</h3>
                      <p className="text-muted-foreground">
                        Yes, we provide custom solutions tailored to your specific business needs. Contact our sales
                        team to discuss your requirements.
                      </p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h3 className="font-medium mb-2">What kind of support do you offer?</h3>
                      <p className="text-muted-foreground">
                        We offer 24/7 technical support via email and chat. Premium plans include dedicated phone
                        support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                Visit Our <span className="text-primary">Office</span>
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to meet you in person at our headquarters.
              </p>
            </div>

            <div className="aspect-video w-full rounded-lg border border-border overflow-hidden">
              {/* Interactive Map - FR CRCE College of Engineering, Bandra, Mumbai */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4463027671814!2d72.82051307597!3d19.05089005347369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410786c061%3A0x6dc3b7cb4b34dbb!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1713293731000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FR CRCE College of Engineering Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
