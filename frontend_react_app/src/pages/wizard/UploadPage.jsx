import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";

// PUBLIC_INTERFACE
export function UploadPage() {
  return (
    <motion.div
      key="upload"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="card p-6"
    >
      <h2 className="text-xl font-semibold">Upload Data</h2>
      <p className="text-slate-600 mt-2">
        Simulate an upload with mock inputs. No real upload is required.
      </p>

      <div className="mt-4 grid gap-4">
        <div>
          <label className="text-sm text-slate-600">Select file</label>
          <input type="file" className="mt-1 block w-full text-sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col">
            <label className="text-sm text-slate-600">Date column</label>
            <select className="mt-1 border rounded-md h-10 px-2 text-sm">
              <option>Date</option>
              <option>Day</option>
              <option>Timestamp</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-slate-600">Metric column</label>
            <select className="mt-1 border rounded-md h-10 px-2 text-sm">
              <option>Spend</option>
              <option>Clicks</option>
              <option>Impressions</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-slate-600">Channel column</label>
            <select className="mt-1 border rounded-md h-10 px-2 text-sm">
              <option>Channel</option>
              <option>Source</option>
              <option>Campaign</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>Mock Upload</Button>
          <Button variant="outline">Reset</Button>
        </div>
      </div>
    </motion.div>
  );
}
