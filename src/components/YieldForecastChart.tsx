
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the yield forecast chart
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
      <div className="bg-defi-dark p-3 rounded-lg border border-white/10 shadow-lg">
        <p className="text-sm text-defi-text">{`Day ${payload[0].payload.day}`}</p>
        <p className="text-sm font-medium text-defi-accent">{`$${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const YieldForecastChart = () => {
  return (
    <div className="card" id="yield-forecast">
      <h2 className="text-lg font-medium mb-2">Yield Forecast</h2>
      <div className="text-2xl font-bold text-white mb-6">+ $2,730</div>
      
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
              stroke="rgba(255, 255, 255, 0.1)"
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
