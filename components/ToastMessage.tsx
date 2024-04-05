"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import React from "react";

// Assuming "useToast" is a custom hook that returns a "toast" function.

// This component can now be used more flexibly by passing any action as children.
export function ToastMessage({ title, description, children }:any) {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title,
      description,
    });
  };

  return React.cloneElement(children, { onClick: showToast });
}
