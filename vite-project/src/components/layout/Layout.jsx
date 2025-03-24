"use client"

import React from "react"
import { Outlet } from "react-router-dom"
import { SiteSidebar } from "./site-sidebar" // Import the new sidebar
import { SidebarInset } from "@/components/ui/sidebar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SiteSidebar /> {/* Use the new sidebar */}
      <div className="flex-1 flex flex-col">
      {/* Wrap the main content and footer */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}
