import * as React from "react"
import { cn } from "@/lib/utils"

function SidebarMenuItem({
    children,
    className,
    ...props
}){
  return (
    <div
      className={cn("w-full relative", className)}
      {...props}
        >
        {children}
    </div>
  )
}
SidebarMenuItem.displayName = "SidebarMenuItem"

export {SidebarMenuItem}
