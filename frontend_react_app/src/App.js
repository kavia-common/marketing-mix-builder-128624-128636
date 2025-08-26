import React from "react";
import "./index.css";
import { AppShell } from "./components/layout/AppShell";
import { Button } from "./components/ui/button";

// PUBLIC_INTERFACE
function App() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <section className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
          <p className="mt-2 text-slate-600">
            TailwindCSS and UI primitives are configured with the brand palette.
          </p>
          <div className="mt-4 flex gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link" asChild>
              <a href="https://react.dev" target="_blank" rel="noreferrer">React Docs</a>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Next steps</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-600">
            <li>Add stepper navigation and wizard pages.</li>
            <li>Integrate Recharts demo with mock data.</li>
            <li>Wire framer-motion for subtle transitions.</li>
            <li>Build calibration, events, and insights screens.</li>
          </ul>
        </section>
      </div>
    </AppShell>
  );
}

export default App;
