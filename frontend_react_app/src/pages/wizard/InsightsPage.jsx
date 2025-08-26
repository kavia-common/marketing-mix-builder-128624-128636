import React from "react";

// PUBLIC_INTERFACE
export function InsightsPage() {
  const cards = [
    { label: "Estimated ROI", value: "3.2x", tone: "text-emerald-600" },
    { label: "Top Channel", value: "Search", tone: "text-blue-600" },
    { label: "Budget Suggestion", value: "+10% to Social", tone: "text-slate-700" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((c, idx) => (
        <div key={idx} className="card p-6">
          <div className="text-sm text-slate-600">{c.label}</div>
          <div className={`text-2xl font-semibold mt-1 ${c.tone}`}>{c.value}</div>
          <div className="text-xs text-slate-500 mt-3">
            Mock insight for demonstration. Replace with real KPI later.
          </div>
        </div>
      ))}
      <div className="md:col-span-3 card p-6">
        <h3 className="text-lg font-semibold">Next Actions</h3>
        <ul className="list-disc pl-5 mt-2 text-sm text-slate-700">
          <li>Review budget distribution across channels.</li>
          <li>Export the plan and share with stakeholders.</li>
          <li>Iterate on calibration settings.</li>
        </ul>
      </div>
    </div>
  );
}
