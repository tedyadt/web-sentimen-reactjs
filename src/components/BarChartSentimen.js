import React from 'react';
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle
} from 'recharts';

const data = [
  { name: 'positive', train: 1264,
    test: 655},
  { name: 'negative', train: 317,
    test: 163},
  
];

const SentimenBarChart = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
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
          <Bar dataKey="train" stackId="a" fill="#3D90D7"/>
          <Bar dataKey="test" stackId="b"  fill="#7AC6D2"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimenBarChart;
