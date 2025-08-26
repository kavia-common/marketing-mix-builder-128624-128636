import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";

// PUBLIC_INTERFACE
export function EventsPage() {
  const [events, setEvents] = useState([
    { date: "2024-02-14", name: "Valentine's Promo" },
    { date: "2024-11-29", name: "Black Friday" },
  ]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addEvent = () => {
    if (!name || !date) return;
    setEvents((e) => [...e, { date, name }]);
    setName("");
    setDate("");
  };

  return (
    <motion.div
      key="events"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="grid gap-6"
    >
      <div className="card p-6">
        <h2 className="text-xl font-semibold">Events & Holidays</h2>
        <p className="text-slate-600 mt-2">
          Add events that may affect performance.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <input
            placeholder="Event name"
            className="border rounded-md h-10 px-3 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            className="border rounded-md h-10 px-3 text-sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button onClick={addEvent}>Add</Button>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-2">Upcoming</h3>
        <ul className="text-sm">
          {events.map((ev, idx) => (
            <li key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
              <span className="text-slate-700">{ev.name}</span>
              <span className="text-slate-500">{ev.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
