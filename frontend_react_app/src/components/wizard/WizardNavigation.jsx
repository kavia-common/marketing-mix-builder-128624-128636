import React from "react";
import { useWizard } from "../../context/WizardContext";
import { Button } from "../ui/button";

/**
 * PUBLIC_INTERFACE
 * WizardNavigation renders Previous/Next buttons and an optional primary CTA on the last step.
 */
export function WizardNavigation({ onFinish }) {
  const { previous, next, isFirst, isLast } = useWizard();

  return (
    <div className="flex items-center justify-between mt-6">
      <Button variant="outline" onClick={previous} disabled={isFirst}>
        Previous
      </Button>
      <div className="flex gap-2">
        {!isLast && (
          <Button onClick={next}>
            Next
          </Button>
        )}
        {isLast && (
          <Button onClick={onFinish ?? (() => {})}>
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}
