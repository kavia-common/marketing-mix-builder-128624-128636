import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { sampleSeries } from "../../mock";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="text-sm font-medium text-slate-900">{label}</p>
        {payload.map((p, idx) => (
          <p key={idx} className="text-sm" style={{ color: p.color }}>
            {p.name}: {p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

/**
 * PUBLIC_INTERFACE
 * ChartsPage: Visualization step showing spend and performance metrics
 */
export function ChartsPage() {
  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-2">Spend Over Time</h3>
        <p className="text-sm text-slate-600 mb-4">
          Track marketing spend and performance metrics over time
        </p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={sampleSeries}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
              <XAxis 
                dataKey="date" 
                tickLine={false}
                tick={{ fill: 'rgb(100 116 139)' }}
              />
              <YAxis 
                tickLine={false}
                tick={{ fill: 'rgb(100 116 139)' }}
                tickFormatter={value => `$${value.toLocaleString()}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                height={36}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-sm text-slate-700">{value}</span>
                )}
              />
              <Line 
                type="monotone" 
                dataKey="spend" 
                name="Marketing Spend"
                stroke="rgb(37 99 235)" 
                strokeWidth={2.5}
                dot={{ fill: "rgb(37 99 235)", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                name="Click Volume"
                stroke="rgb(34 197 94)" 
                strokeWidth={2.5}
                dot={{ fill: "rgb(34 197 94)", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-2">Monthly Performance</h3>
        <p className="text-sm text-slate-600 mb-4">
          Compare click engagement across different months
        </p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={sampleSeries}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
              <XAxis 
                dataKey="date" 
                tickLine={false}
                tick={{ fill: 'rgb(100 116 139)' }}
              />
              <YAxis 
                tickLine={false}
                tick={{ fill: 'rgb(100 116 139)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="top"
                height={36}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-sm text-slate-700">{value}</span>
                )}
              />
              <Bar 
                dataKey="clicks" 
                name="Click Volume"
                fill="rgb(100 116 139)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
