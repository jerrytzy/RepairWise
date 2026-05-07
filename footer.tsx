import Link from "next/link"
import { Leaf, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">RepairWise</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Promoting sustainable device ownership through the Right to Repair movement.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/device-checker" className="text-muted-foreground transition-colors hover:text-foreground">
                  Device Checker
                </Link>
              </li>
              <li>
                <Link href="/e-waste-stats" className="text-muted-foreground transition-colors hover:text-foreground">
                  E-Waste Stats
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about#right-to-repair" className="text-muted-foreground transition-colors hover:text-foreground">
                  What is Right to Repair?
                </Link>
              </li>
              <li>
                <Link href="/about#obsolescence" className="text-muted-foreground transition-colors hover:text-foreground">
                  Software Obsolescence
                </Link>
              </li>
              <li>
                <Link href="/e-waste-stats" className="text-muted-foreground transition-colors hover:text-foreground">
                  Manila E-Waste Data
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} RepairWise. A student capstone project promoting sustainability in Manila.
          </p>
        </div>
      </div>
    </footer>
  )
}
