import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, ArrowRightIcon, ExternalLinkIcon, CodeIcon, BookOpenIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/lal-ye/-Abenezer-Kassahun.github.io",
      demo: "#",
    },
  ]

  // Skills data
  const skills = [
    { name: "Git", icon: <CodeIcon className="h-5 w-5" /> },
  ]

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section - Two Column Layout */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-primary/20">
                <img src="/placeholder.svg?height=280&width=280" alt="Profile" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">አንደምን ቆያችሁ</h1>
              <p className="text-xl text-muted-foreground">
                My name is <span className="font-bold">Abenezer Kassahun</span> and
                </p>
              <p>I am a{" "}
                <span className="font-bold text-lg">wannabe </span>.
              </p>
           <p>
               <strong style={{ fontSize: '1.2em' }}>፠ አበልፃጊ ፠</strong>
            </p>
              <p className="text-muted-foreground">
                The true scarcity is attention, not time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link to="/projects">
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}


