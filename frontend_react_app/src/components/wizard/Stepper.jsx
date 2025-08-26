import React from "react";
import { useWizard } from "../../context/WizardContext";
import { cn } from "../../lib/utils";

/**
 * PUBLIC_INTERFACE
 * Stepper displays the step list with progress and allows navigation.
 */
export function Stepper() {
  const { steps, currentStep, goTo, progress } = useWizard();

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium text-slate-600">
          Step {currentStep + 1} of {steps.length}
        </div>
        <div className="w-40 h-2 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {steps.map((s, idx) => {
          const active = idx === currentStep;
          const done = idx < currentStep;
          return (
            <button
              key={s.key}
              onClick={() => goTo(idx)}
              className={cn(
                "w-full rounded-md border px-3 py-2 text-sm text-left transition",
                active
                  ? "bg-primary text-white border-primary"
                  : done
                  ? "bg-accent/10 text-slate-700 border-accent/30"
                  : "bg-white hover:bg-slate-50"
              )}
            >
              <div className="font-semibold truncate">{s.title}</div>
              {s.subtitle && (
                <div className={cn("text-xs truncate", active ? "text-white/90" : "text-slate-500")}>
                  {s.subtitle}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
