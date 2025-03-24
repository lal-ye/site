import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/layout/ThemeProvider"
import  Layout  from "./components/layout/Layout" // No need for curly braces
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
