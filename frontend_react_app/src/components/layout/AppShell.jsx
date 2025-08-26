import React from "react";
import { cn } from "../../lib/utils";

/**
 * PUBLIC_INTERFACE
 * AppShell: Basic layout wrapper that constrains content and shows a header.
 */
export function AppShell({ className, children }) {
  return (
    <div className={cn("min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]", className)}>
      <header className="border-b border-border/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:bg-slate-900/50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <div className="font-semibold tracking-tight">Marketing Model Builder</div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span>Prototype</span>
          </div>
        </div>
      </header>
      <main className="container py-8">{children}</main>
    </div>
  );
}
