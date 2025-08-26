import React from "react";

// PUBLIC_INTERFACE
export function PreviewPage() {
  const rows = [
    { date: "2024-01-01", channel: "Search", spend: 12000, clicks: 2000 },
    { date: "2024-02-01", channel: "Social", spend: 15000, clicks: 2300 },
    { date: "2024-03-01", channel: "TV", spend: 11000, clicks: 1900 },
  ];

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold">Preview & Mapping</h2>
      <p className="text-slate-600 mt-2">
        Quick look at your data. Adjust mappings if needed.
      </p>

      <div className="mt-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Channel</th>
              <th className="py-2 pr-4">Spend</th>
              <th className="py-2">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2 pr-4">{r.date}</td>
                <td className="py-2 pr-4">{r.channel}</td>
                <td className="py-2 pr-4">${r.spend.toLocaleString()}</td>
                <td className="py-2">{r.clicks.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
