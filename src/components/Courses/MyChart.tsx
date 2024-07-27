import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Javascript', language: 78 },
  { name: 'Python', language: 58 },
  { name: 'Java', language: 50 },
  { name: 'C#', language: 42 },
  { name: 'php', language: 38 },
  { name: 'C++', language: 35 },
  { name: 'TypeScript', language: 30 },
  { name: 'Ruby', language: 20 },
  { name: 'Swift', language: 18 },
  { name: 'go', language: 23 },
];

const colors = [
  'rgba(239,216,29,0.9)',
  'rgba(49,105,148,0.9)',
  'rgba(234,140,16,0.9)',
  'rgba(42,1,100,0.9)',
  'rgba(115,119,173,0.9)',
  'rgba(8,67,128,0.9)',
  'rgba(47,116,192,0.9)',
  'rgba(175,13,0,0.9)',
  'rgba(247,70,42,0.9)',
  'rgb(103,208,222,0.9)'
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label" style={{ fontWeight: "600", fontFamily: "monospace", fontSize: "0.9rem", color: "rgb(198, 3, 252)" }}>{label}</p>
      </div>
    );
  }
  return null;
};

const MyChart: React.FC = () => {
  return (
    <>
      <h2>Most Popular Programming Languages</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="language" fill='rgb(198,3,252)'>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default MyChart;
