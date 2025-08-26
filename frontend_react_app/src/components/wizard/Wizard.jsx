import React, { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { WizardProvider, useWizard } from "../../context/WizardContext";
import { Stepper } from "./Stepper";
import { WizardNavigation } from "./WizardNavigation";
import { UploadPage } from "../../pages/wizard/UploadPage";
import { PreviewPage } from "../../pages/wizard/PreviewPage";
import { ChartsPage } from "../../pages/wizard/ChartsPage";
import { CalibrationPage } from "../../pages/wizard/CalibrationPage";
import { EventsPage } from "../../pages/wizard/EventsPage";
import { InsightsPage } from "../../pages/wizard/InsightsPage";

/**
 * PUBLIC_INTERFACE
 * Wizard encapsulates the stepper, content area, and navigation.
 */
export function Wizard() {
  const steps = useMemo(
    () => [
      { key: "upload", title: "Upload", subtitle: "Load data" },
      { key: "preview", title: "Preview", subtitle: "Map and verify" },
      { key: "charts", title: "Charts", subtitle: "Visualize" },
      { key: "calibration", title: "Calibration", subtitle: "Tune params" },
      { key: "events", title: "Events", subtitle: "Mark moments" },
      { key: "insights", title: "Insights", subtitle: "Review KPIs" },
    ],
    []
  );

  const onFinish = () => {
    // Placeholder for future action
    alert("Finished wizard (mock).");
  };

  return (
    <WizardProvider steps={steps}>
      <div className="grid gap-6">
        <Stepper />
        <Content />
        <WizardNavigation onFinish={onFinish} />
      </div>
    </WizardProvider>
  );
}

function Content() {
  const { step } = useWizard();

  return (
    <AnimatePresence mode="wait">
      {step?.key === "upload" && <UploadPage key="upload" />}
      {step?.key === "preview" && <PreviewPage key="preview" />}
      {step?.key === "charts" && <ChartsPage key="charts" />}
      {step?.key === "calibration" && <CalibrationPage key="calibration" />}
      {step?.key === "events" && <EventsPage key="events" />}
      {step?.key === "insights" && <InsightsPage key="insights" />}
    </AnimatePresence>
  );
}
