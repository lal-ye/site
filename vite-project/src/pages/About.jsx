import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GithubIcon,
  MailIcon,
  BookOpenIcon,
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  GitBranchIcon,
  GlobeIcon,
} from "lucide-react"

export default function About() {
  // Skills data with icons
  const skills = [
    { name: "JavaScript", icon: <CodeIcon className="h-5 w-5" />, level: 90 },
    { name: "React", icon: <CodeIcon className="h-5 w-5" />, level: 85 },
    { name: "Node.js", icon: <ServerIcon className="h-5 w-5" />, level: 80 },
    { name: "Tailwind CSS", icon: <CodeIcon className="h-5 w-5" />, level: 90 },
    { name: "MongoDB", icon: <DatabaseIcon className="h-5 w-5" />, level: 75 },
    { name: "Git", icon: <GitBranchIcon className="h-5 w-5" />, level: 85 },
    { name: "RESTful APIs", icon: <GlobeIcon className="h-5 w-5" />, level: 80 },
    { name: "Express", icon: <ServerIcon className="h-5 w-5" />, level: 75 },
  ]

  return (
    <div className="space-y-12 pb-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h1>
        <p className="text-muted-foreground max-w-[800px]">Learn more about who I am, my background, and what I do.</p>
      </div>


      {/* Contact Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-6">
              I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to
              me through any of the channels below.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/lal-ye/-Abenezer-Kassahun.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:example@example.com">
                  <MailIcon className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              {/* Add more contact methods as needed */}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


