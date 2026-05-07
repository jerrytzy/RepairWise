import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Leaf,
  Wrench,
  Recycle,
  Smartphone,
  Battery,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-20 sm:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Leaf className="h-4 w-4" />
                Sustainability • Right to Repair • Manila
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">RepairWise</span>
              </h1>

              <p className="mb-4 text-xl font-medium text-foreground/80 sm:text-2xl">
                <span className="text-pretty">
                  Promoting Right to Repair and Reducing E-Waste Through Smarter Device Decisions
                </span>
              </p>

              <p className="mb-8 text-base text-muted-foreground sm:text-lg">
                <span className="text-pretty">
                  Software-induced obsolescence forces millions of working devices into landfills every year.
                  RepairWise helps you make informed decisions about repairing your devices instead of replacing them,
                  contributing to a more sustainable future for Manila and beyond.
                </span>
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/device-checker">
                    Check Your Device
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Smartphone className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Check Repairability</h3>
                  <p className="text-sm text-muted-foreground">
                    Get detailed repair scores and availability for your device
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Wrench className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Find Repair Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover local repair shops and estimated costs in Manila
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Recycle className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Reduce E-Waste</h3>
                  <p className="text-sm text-muted-foreground">
                    Track your environmental impact and carbon savings
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-card py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">2.7M</div>
                <div className="mt-2 text-sm text-muted-foreground">Metric tons of e-waste in PH yearly</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">70%</div>
                <div className="mt-2 text-sm text-muted-foreground">Devices can be repaired</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">₱15K</div>
                <div className="mt-2 text-sm text-muted-foreground">Average savings from repair</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">35kg</div>
                <div className="mt-2 text-sm text-muted-foreground">CO₂ saved per device repaired</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <span className="text-balance">Why Choose Repair Over Replace?</span>
              </h2>
              <p className="text-muted-foreground">
                <span className="text-pretty">
                  The Right to Repair movement empowers consumers to extend device lifespans,
                  save money, and protect the environment.
                </span>
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Battery className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Battery Replacement</h3>
                  <p className="text-sm text-muted-foreground">
                    Replace degraded batteries to restore your device&apos;s original performance and extend its life by years.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Software Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Understand when software obsolescence affects your device and explore alternative solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Cost Savings</h3>
                  <p className="text-sm text-muted-foreground">
                    Save thousands of pesos by repairing instead of buying new devices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <span className="text-balance">How It Works</span>
              </h2>
              <p className="text-muted-foreground">
                Three simple steps to make smarter device decisions
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Enter Your Device</h3>
                <p className="text-sm text-muted-foreground">
                  Search for your device model to get started with our comprehensive database.
                </p>
              </div>

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Review Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  See repairability scores, support status, and repair cost estimates.
                </p>
              </div>

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Make Smart Decisions</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized recommendations on whether to repair or replace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
              <CardContent className="p-8 sm:p-12">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    <span className="text-balance">Ready to Make a Difference?</span>
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    <span className="text-pretty">
                      Check your device&apos;s repairability now and join the movement to reduce e-waste in Manila.
                    </span>
                  </p>

                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="gap-2">
                      <Link href="/device-checker">
                        <CheckCircle className="h-4 w-4" />
                        Check Your Device
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/e-waste-stats">View E-Waste Stats</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
