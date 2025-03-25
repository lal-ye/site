// UI component imports
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Icon imports
import { GithubIcon, ExternalLinkIcon } from "lucide-react"

export default function Projects() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A brief description of your first project. This is where you can explain what the project does and what technologies were used.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/lal-ye/-Abenezer-Kassahun.github.io",
      demo: "#",
    },
  ]

  return (
    <div className="space-y-8 pb-16">
      {/* Projects Header Section */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Projects</h1>
        <p className="text-muted-foreground max-w-[800px]">
          Browse through my portfolio of projects. Each project represents a unique challenge and solution. Click on the
          cards to learn more about each project.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group">
            {/* Project Image with Overlay */}
            <div className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="secondary" className="gap-1">
                    <GithubIcon className="h-4 w-4" /> Code
                  </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-1">
                    <ExternalLinkIcon className="h-4 w-4" /> Demo
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Project Details */}
            <CardHeader className="p-4">
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-muted-foreground text-sm">{project.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2 flex-wrap">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}