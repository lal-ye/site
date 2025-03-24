import * as React from "react"

import { cn } from "@/lib/utils"

const SidebarInset = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("lg:ps-[--sidebar-width]", className)} {...props} />
))
SidebarInset.displayName = "SidebarInset"

export { SidebarInset }
