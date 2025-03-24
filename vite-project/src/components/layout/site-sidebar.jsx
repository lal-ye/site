"use client"

import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, FolderKanban, User, Menu, X } from 'lucide-react'
import { ModeToggle } from "./ModeToggle"; // Import directly from ModeToggle.
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar"

export function SiteSidebar() {
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "About", path: "/about", icon: User },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-2 border-none">
            <span className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
              Abenezer Kassahun
            </span>
          </Link>
          <SidebarTrigger className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5 block sidebar-open:hidden" />
              <X className="h-5 w-5 hidden sidebar-open:block" />
            </Button>
          </SidebarTrigger>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.path)}
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Theme</span>
            {/* Assuming you have a ModeToggle component */}
            <ModeToggle />
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
