// External library imports
import { useEffect } from "react"
import { Link } from "react-router-dom"

// UI component imports
import { Button } from "@/components/ui/button"

// Icon imports
import { ArrowRightIcon } from "lucide-react"

export default function Home() {
  // Component lifecycle hook
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div className="min-h-screen flex items-center">
      {/* Hero Section - Full Width Layout */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src="/placeholder.svg?height=320&width=320" 
                  alt="Profile" 
                  className="object-cover w-full h-full" 
                />
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">አንደምን ቆያችሁ</h1>
              <div className="space-y-3">
                <p className="text-xl text-muted-foreground">
                  My name is <span className="font-bold">Abenezer Kassahun</span> and
                </p>
                <p className="text-lg">
                  I am a{" "}<span className="font-bold text-xl">wannabe </span>.
                </p>
                <p>
                  <strong className="text-2xl">፠ አበልፃጊ ፠</strong>
                </p>
                <p className="text-muted-foreground text-lg">
                  The true scarcity is attention, not time.
                </p>
              </div>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/projects">
                  <Button variant="default" size="lg" className="w-full sm:w-auto">
                    View My Projects <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
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