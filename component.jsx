/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GUJUokLh559
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <GlobeIcon className="h-6 w-6" />
          <span className="sr-only">Proxy Pro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure and Reliable Proxy Service
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access the internet with privacy and freedom using our cutting-edge IPv4 and IPv6 proxy service.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Proxy Pro?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our proxy service offers a range of features to keep you safe and connected online.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">IPv4 and IPv6 Support</h3>
                      <p className="text-muted-foreground">
                        Access the internet with both IPv4 and IPv6 proxy servers for maximum flexibility.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Blazing Fast Speeds</h3>
                      <p className="text-muted-foreground">
                        Our high-performance proxy network ensures lightning-fast internet speeds.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Strict No-Logs Policy</h3>
                      <p className="text-muted-foreground">
                        Your online activities are never logged or monitored, ensuring your privacy.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Unlimited Bandwidth</h3>
                      <p className="text-muted-foreground">Browse, stream, and download without any data limits.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Proxy Plans</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">Basic</h3>
                    <p className="text-4xl font-bold">$5</p>
                    <p className="text-muted-foreground">per month</p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      IPv4 and IPv6 Proxy
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Unlimited Bandwidth
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Strict No-Logs Policy
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      24/7 Customer Support
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Get Started</Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <p className="text-4xl font-bold">$10</p>
                    <p className="text-muted-foreground">per month</p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      IPv4 and IPv6 Proxy
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Unlimited Bandwidth
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Strict No-Logs Policy
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      24/7 Customer Support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Dedicated IP Address
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Get Started</Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-4xl font-bold">$20</p>
                    <p className="text-muted-foreground">per month</p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      IPv4 and IPv6 Proxy
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Unlimited Bandwidth
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Strict No-Logs Policy
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      24/7 Customer Support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Dedicated IP Address
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                      Custom Configuration
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with Proxy Pro.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <blockquote className="text-lg font-semibold leading-snug">
                  "Proxy Pro has been a game-changer for my online privacy and\n security. The fast speeds and reliable
                  connection have made\n it an essential tool in my daily life."
                </blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Jane Doe</div>
                    <div className="text-sm text-muted-foreground">Software Engineer</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <blockquote className="text-lg font-semibold leading-snug">
                  "I've tried many proxy services, but Proxy Pro stands out\n with its exceptional performance and
                  unwavering commitment\n to privacy. It's the only proxy I trust for my online\n activities."
                </blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}
