import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

import { Badge } from "@/components/ui/badge"
import img from "./assets/Calculator.png"
import img2 from "./assets/PasswordGenerator.png"
import img3 from "./assets/LoginForm.png"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">My Portfolio</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Skills
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Hi, I&#39;m Sofiane El Mererbi
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I&#39;m a frontend developer with a passion for creating beautiful and functional web applications.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="John Doe"
                  className="aspect-[1/1] overflow-hidden rounded-full object-cover"
                  height="500"
                  src="/placeholder.svg"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the projects I&#39;ve worked on.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Project 1</h3>
                <a href="https://sofianemrb.github.io/Calculator/"><img src={img} alt="calculator"  className="aspect-[2/1]"/></a>
                <p className="text-sm text-gray-500 dark:text-gray-400">A simple calculator made with vanilla JavaScript</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Project 2</h3>
                <a href="https://sofianemrb.github.io/RandomPasswordGenerator/"><img src={img2} alt="calculator"  className="aspect-[2/1]"/></a>
                <p className="text-sm text-gray-500 dark:text-gray-400">A simple password generator made with vanilla JavaScript</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Project 3</h3>
                <a href="https://sofianemrb.github.io/newForm/"><img src={img3} alt="calculator" className="aspect-[2/1]"/></a>
                <p className="text-sm text-gray-500 dark:text-gray-400">A simple login form made with vanilla JavaScript</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="skills">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skills</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the skills I&#39;ve acquired over the years.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">Express.js</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">HTML</Badge>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                If you&#39;d like to get in touch, feel free to send me an email.
              </p>
            </div>
            <HoverCard className="flex items-center gap-2 ">
                 <HoverCardTrigger >Contacts</HoverCardTrigger>
                    <HoverCardContent>
                        Email: sofiane.mererbi@gmail.com
                        phone number : +213550289161
                </HoverCardContent>
            </HoverCard>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Sofiane El Mererbi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
