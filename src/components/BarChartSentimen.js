import React from 'react';
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'jual', positive: 650 },
  { name: 'beli', positive: 600 },
  { name: 'facebook', positive: 370 },
  { name: 'cari', positive: 230 },
  { name: 'cod', positive: 210 },
  { name: 'tipu', negative: 100 },
  { name: 'banyak', negative: 90 },
];

const SentimenBarChart = () => {
  return (
    <div className="w-1/2 h-80 mb-5">
      <ResponsiveContainer width="70%" height="120%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="positive" stackId="a" fill="#8884d8" />
          <Bar dataKey="negative" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimenBarChart;
