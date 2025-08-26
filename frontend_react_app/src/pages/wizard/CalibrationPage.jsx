import React, { useState } from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
export function CalibrationPage() {
  const [adstock, setAdstock] = useState(0.5);
  const [saturation, setSaturation] = useState(0.7);
  const [noise, setNoise] = useState(0.2);

  return (
    <motion.div
      key="calibration"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="card p-6"
    >
      <h2 className="text-xl font-semibold">Calibration</h2>
      <p className="text-slate-600 mt-2">
        Adjust mock parameters to calibrate the model.
      </p>

      <div className="mt-4 grid gap-5 md:grid-cols-3">
        <div>
          <div className="text-sm font-medium">Adstock</div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={adstock}
            onChange={(e) => setAdstock(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-slate-600 mt-1">{adstock.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-sm font-medium">Saturation</div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={saturation}
            onChange={(e) => setSaturation(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-slate-600 mt-1">{saturation.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-sm font-medium">Noise</div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={noise}
            onChange={(e) => setNoise(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-slate-600 mt-1">{noise.toFixed(2)}</div>
        </div>
      </div>
    </motion.div>
  );
}
