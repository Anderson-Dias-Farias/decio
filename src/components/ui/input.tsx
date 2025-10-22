import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base transition-colors outline-none",
        "focus:border-[#234c9c] focus:ring-2 focus:ring-[#234c9c]/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{
        borderColor: "rgb(156, 163, 175)", // gray-300
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "#234c9c";
        e.target.style.boxShadow = "0 0 0 2px rgba(35, 76, 156, 0.2)";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "rgb(156, 163, 175)";
        e.target.style.boxShadow = "none";
      }}
      {...props}
    />
  );
}

export { Input };
