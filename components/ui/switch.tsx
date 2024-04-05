"use client"

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-12 items-center rounded-full transition-colors ease-in-out duration-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      "bg-opacity-20 bg-gradient-to-r from-gray-700 to-gray-950 border border-gray-200/40 shadow-lg backdrop-blur-sm",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className="block h-6 w-6 rounded-full bg-blue-500/60 border border-gray-300 shadow-sm transform transition-transform ease-in-out duration-300 
      data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-red-500"
    
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = "Switch";

export { Switch };
