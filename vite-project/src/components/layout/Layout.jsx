import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "./ThemeProvider"

export default function Layout({ children }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}


