import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

// PUBLIC_INTERFACE
export const WizardContext = createContext(null);

/**
 * PUBLIC_INTERFACE
 * WizardProvider wraps the wizard flow, providing step metadata and navigation helpers.
 */
export function WizardProvider({ steps = [], initialStep = 0, children }) {
  const [currentStep, setCurrentStep] = useState(
    Math.max(0, Math.min(initialStep, steps.length - 1))
  );

  const next = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  }, [steps.length]);

  const previous = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  const goTo = useCallback(
    (idx) => {
      if (Number.isFinite(idx)) {
        setCurrentStep(Math.max(0, Math.min(idx, steps.length - 1)));
      }
    },
    [steps.length]
  );

  const value = useMemo(
    () => ({
      steps,
      currentStep,
      step: steps[currentStep],
      isFirst: currentStep === 0,
      isLast: currentStep === steps.length - 1,
      next,
      previous,
      goTo,
      total: steps.length,
      progress: steps.length > 1 ? (currentStep / (steps.length - 1)) * 100 : 0,
    }),
    [steps, currentStep, next, previous, goTo]
  );

  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
}

// PUBLIC_INTERFACE
export function useWizard() {
  /**
   * Hook to access wizard state and controls.
   */
  const ctx = useContext(WizardContext);
  if (!ctx) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return ctx;
}
