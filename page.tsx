import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Wrench,
  Shield,
  Leaf,
  Users,
  Target,
  Lightbulb,
  AlertTriangle,
  Clock,
  CheckCircle,
  ArrowRight,
  Scale,
  Recycle,
  Globe,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-secondary/50 to-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                <span className="text-balance">About RepairWise</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                <span className="text-pretty">
                  A student capstone project dedicated to promoting the Right to Repair movement
                  and reducing electronic waste in Manila through informed device decisions.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* What is Right to Repair */}
        <section id="right-to-repair" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Wrench className="h-4 w-4" />
                  Understanding the Movement
                </div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  <span className="text-balance">What is Right to Repair?</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Right to Repair is a global movement advocating for consumers&apos; ability to repair
                    and modify their own electronics and other products. It challenges manufacturers who
                    design products that are difficult or impossible to repair, forcing consumers to buy new devices.
                  </p>
                  <p>
                    This movement fights against practices like:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Proprietary screws and tools that prevent DIY repairs</li>
                    <li>Software locks that disable repaired components</li>
                    <li>Withholding repair manuals and diagnostic tools</li>
                    <li>Restricting access to genuine replacement parts</li>
                  </ul>
                  <p>
                    By supporting Right to Repair, we can reduce e-waste, save money, and give consumers
                    control over the devices they own.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <Scale className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 font-semibold text-foreground">Consumer Rights</h3>
                    <p className="text-sm text-muted-foreground">
                      The right to repair what you own, using parts and tools of your choice.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Recycle className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 font-semibold text-foreground">Environmental Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Extending device lifespans reduces e-waste and conserves resources.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Users className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 font-semibold text-foreground">Local Economy</h3>
                    <p className="text-sm text-muted-foreground">
                      Supporting independent repair shops creates local jobs and businesses.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Globe className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 font-semibold text-foreground">Global Movement</h3>
                    <p className="text-sm text-muted-foreground">
                      Joining a worldwide effort to change how products are designed and sold.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Software-Induced Obsolescence */}
        <section id="obsolescence" className="bg-secondary/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <Card className="border-amber-500/30 bg-amber-500/5">
                    <CardContent className="flex gap-4 p-6">
                      <AlertTriangle className="h-8 w-8 shrink-0 text-amber-500" />
                      <div>
                        <h3 className="mb-2 font-semibold text-foreground">Update Cutoffs</h3>
                        <p className="text-sm text-muted-foreground">
                          Manufacturers stop providing software updates, making devices insecure
                          or incompatible with new apps.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-amber-500/30 bg-amber-500/5">
                    <CardContent className="flex gap-4 p-6">
                      <Clock className="h-8 w-8 shrink-0 text-amber-500" />
                      <div>
                        <h3 className="mb-2 font-semibold text-foreground">Performance Throttling</h3>
                        <p className="text-sm text-muted-foreground">
                          Some updates intentionally slow down older devices, pushing users
                          toward upgrades.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-amber-500/30 bg-amber-500/5">
                    <CardContent className="flex gap-4 p-6">
                      <Shield className="h-8 w-8 shrink-0 text-amber-500" />
                      <div>
                        <h3 className="mb-2 font-semibold text-foreground">App Incompatibility</h3>
                        <p className="text-sm text-muted-foreground">
                          Essential apps require newer OS versions, making older but functional
                          devices unusable for daily tasks.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600">
                  <AlertTriangle className="h-4 w-4" />
                  The Hidden Problem
                </div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  <span className="text-balance">Software-Induced Obsolescence</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Software-induced obsolescence is a practice where manufacturers use software
                    updates (or lack thereof) to make perfectly functional hardware obsolete.
                    This forces consumers to buy new devices even when their current ones work fine.
                  </p>
                  <p>
                    This form of planned obsolescence is often invisible to consumers. A phone
                    that still works perfectly may become &quot;outdated&quot; simply because it can no
                    longer receive security updates or run popular apps.
                  </p>
                  <p>
                    In the Philippines alone, this practice contributes to millions of metric
                    tons of electronic waste annually, as devices are discarded years before
                    their hardware fails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Importance of Sustainability */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Leaf className="h-4 w-4" />
                Our Environment
              </div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <span className="text-balance">Why Sustainability Matters</span>
              </h2>
              <p className="text-muted-foreground">
                Electronic waste is one of the fastest-growing waste streams in the world.
                By extending device lifespans, we can significantly reduce our environmental impact.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Leaf className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Reduce Carbon Emissions</h3>
                  <p className="text-sm text-muted-foreground">
                    Manufacturing new devices produces 70-300kg of CO₂. Repairing produces only 5-10kg
                    for the same functional outcome.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Recycle className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Conserve Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Electronics contain rare earth elements and precious metals. Extending device life
                    reduces demand for mining and extraction.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Globe className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Protect Communities</h3>
                  <p className="text-sm text-muted-foreground">
                    Improper e-waste disposal releases toxic substances that harm communities
                    and ecosystems, especially in developing countries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Goals */}
        <section className="bg-secondary/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <span className="text-balance">Project Goals</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Educate</h3>
                <p className="text-sm text-muted-foreground">
                  Raise awareness about software-induced obsolescence and its environmental impact
                </p>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Empower</h3>
                <p className="text-sm text-muted-foreground">
                  Provide tools to help consumers make informed repair vs. replace decisions
                </p>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Advocate</h3>
                <p className="text-sm text-muted-foreground">
                  Support Right to Repair legislation and policies in the Philippines
                </p>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Reduce</h3>
                <p className="text-sm text-muted-foreground">
                  Help minimize e-waste generation in Manila through smarter device decisions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How You Can Help */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Lightbulb className="h-4 w-4" />
                Take Action
              </div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <span className="text-balance">How You Can Help</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">Check Before You Buy</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our Device Checker to evaluate repairability scores before purchasing new devices.
                    Choose products designed to last.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Wrench className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">Repair First</h3>
                  <p className="text-sm text-muted-foreground">
                    When your device has issues, explore repair options before buying new.
                    Support local repair shops in your community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">Spread Awareness</h3>
                  <p className="text-sm text-muted-foreground">
                    Share information about Right to Repair with friends and family.
                    Help build a community of conscious consumers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-card py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <span className="text-balance">Ready to Make a Difference?</span>
              </h2>
              <p className="mb-8 text-muted-foreground">
                Start by checking your device&apos;s repairability and join the movement to reduce e-waste in Manila.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/device-checker">
                    Check Your Device
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/e-waste-stats">View E-Waste Stats</Link>
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
