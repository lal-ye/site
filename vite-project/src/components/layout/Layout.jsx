"use client"

import React from "react"
import Footer from "./Footer"
import { ModeToggle } from "./mode-toggle"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 flex justify-end">
        <ModeToggle />
      </header>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}