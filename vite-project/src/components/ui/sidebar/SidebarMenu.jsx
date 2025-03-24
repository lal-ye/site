import * as React from "react"

import { cn } from "@/lib/utils"

const SidebarMenuContext = React.createContext({})

function SidebarMenu({
    children,
    className,
    ...props
}) {
  return (
    <div
      className={cn("mt-4", className)}
      {...props}
    >
        {children}
    </div>
  )
}
SidebarMenu.displayName = "SidebarMenu"

export { SidebarMenu }
