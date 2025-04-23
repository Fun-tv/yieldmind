
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const forecastData = [
  { day: 0, value: 0 },
  { day: 5, value: 400 },
  { day: 10, value: 700 },
  { day: 15, value: 1200 },
  { day: 20, value: 1800 },
  { day: 25, value: 2200 },
  { day: 30, value: 2730 }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e2340] p-3 rounded-lg border border-white/10 shadow-lg">
        <p className="text-xs text-white/60">{`Day ${payload[0].payload.day}`}</p>
        <p className="text-sm font-semibold text-defi-accent">{`$${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const YieldForecastChart = () => {
  return (
    <div className="bg-[#151926] rounded-xl px-7 py-6 mb-5 shadow-lg border border-[#232946]" id="yield-forecast">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Yield Forecast</h2>
      </div>
      <div className="text-[2rem] font-bold text-white mb-4 leading-tight">
        + $2.730
      </div>
      <div className="w-full h-36">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastData} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
            <XAxis
              dataKey="day"
              tick={{ fill: 'rgba(255, 255, 255, 0.18)', fontSize: 12 }}
              stroke="rgba(255, 255, 255, 0.09)"
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4361EE"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#4361EE", stroke: "#0E1014", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YieldForecastChart;
