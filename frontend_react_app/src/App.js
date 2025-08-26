import React from "react";
import "./index.css";
import { AppShell } from "./components/layout/AppShell";
import { Wizard } from "./components/wizard/Wizard";

/**
 * PUBLIC_INTERFACE
 * App: Entry point rendering the Marketing Model Builder wizard.
 */
function App() {
  return (
    <AppShell>
      <Wizard />
    </AppShell>
  );
}

export default App;
