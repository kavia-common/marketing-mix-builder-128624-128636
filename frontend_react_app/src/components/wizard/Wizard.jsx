import React, { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={step?.key}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.3
        }}
      >
        {step?.key === "upload" && <UploadPage />}
        {step?.key === "preview" && <PreviewPage />}
        {step?.key === "charts" && <ChartsPage />}
        {step?.key === "calibration" && <CalibrationPage />}
        {step?.key === "events" && <EventsPage />}
        {step?.key === "insights" && <InsightsPage />}
      </motion.div>
    </AnimatePresence>
  );
}
