import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground max-w-[500px]">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of these
            platforms.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <a
            href="https://github.com/lal-ye/-Abenezer-Kassahun.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:example@example.com"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Email"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          &copy; {new Date().getFullYear()} Abenezer Kassahun. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


