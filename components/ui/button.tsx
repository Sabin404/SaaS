import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:bg-disabled_brand disabled:text-brand_gray [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary_brand text-white  hover:bg-primary_hover_brand focus-visible:bg-primary_hover_brand",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary_brand  hover:bg-primary_hover_brand hover:text-white focus-visible:bg-primary_hover_brand",
        secondary:
          "bg-secondary_brand text-white  hover:bg-secondary_hover_brand focus-visible:bg-primary_hover_brand",

        ghost: "hover:bg-accent hover:text-accent-foreground  ",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-4 py-2 rounded-[8px]",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 rounded-md px-4 py-2 text-sm",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
