
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button" // Import existing button variants


const sidebarMenuButtonVariants = cva(
    cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "w-full justify-start [&_svg]:w-4 [&_svg]:h-4"
    ),
    {
        variants: {
            isActive: {
                true: "bg-accent text-accent-foreground",
                false: "",
            }
        },
    }
)
function SidebarMenuButton({
    className,
    isActive,
    asChild,
    ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(sidebarMenuButtonVariants({isActive, className}))}
      {...props}
    />
  )
}
SidebarMenuButton.displayName = "SidebarMenuButton"

export { SidebarMenuButton, sidebarMenuButtonVariants }
