import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500",
        destructive: "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
        outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus-visible:ring-blue-500",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-500",
        ghost: "text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-800 focus-visible:ring-gray-300",
        link: "text-blue-500 hover:text-blue-600 underline hover:no-underline focus-visible:ring-blue-500",
        success: "bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "p-2 aspect-square",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className, {
          'justify-center': !children,
        })}
        ref={ref}
        {...props}
      >
        {icon && <span className={`flex-shrink-0 ${size === 'icon' ? 'w-5 h-5' : 'w-4 h-4 mr-2'}`}>{icon}</span>}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
