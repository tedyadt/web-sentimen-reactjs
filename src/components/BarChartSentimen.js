import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'positive', train: 1264, test: 655 },
  { name: 'negative', train: 317, test: 163 },
];

const SentimenBarChart = () => {
  const brandColor = "#1447E6";
  const brandSecondaryColor = "#6B8DE3";

  return (
    <div className="w-full bg-white border hover:shadow-lg border-gray-200 rounded-lg shadow p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-100 border border-gray-200 flex items-center justify-center rounded-full me-3">
            <svg className="w-7 h-7 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>
          </div>
          <div>
            <h5 className="text-2xl font-semibold text-gray-900">2.4k</h5>
            <p className="text-sm text-gray-500">Total Data</p>
          </div>
        </div>
        <div>
        </div>
      </div>

      <div className="grid grid-cols-2 mb-4">
        <dl className="flex items-center">
          <dt className="text-gray-500 text-sm font-normal me-1">Train set:</dt>
          <dd className="text-gray-900 text-sm font-semibold">1,581</dd>
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-500 text-sm font-normal me-1">Test set:</dt>
          <dd className="text-gray-900 text-sm font-semibold">818</dd>
        </dl>
      </div>

      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: -14,
              right: 2,
              left: 2,
              bottom: 5,
            }}
            barCategoryGap="30%"
          >
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12, fontFamily: 'Inter, sans-serif' }}
            />
            <Tooltip 
              contentStyle={{ 
                fontFamily: 'Inter, sans-serif',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem'
              }}
              cursor={{ fill: 'transparent' }}
            />
            <Bar dataKey="train" fill={brandColor} radius={[8, 8, 0, 0]} />
            <Bar dataKey="test" fill={brandSecondaryColor} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 items-center border-t border-gray-200">
        <div className="flex justify-between items-center pt-4 md:pt-6">
          <h2 className="text-lg font-semibold text-blue-700">Distribusi Sentimen</h2>  
              
        </div>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
            Visualisasi ini menampilkan sebaran data positif dan negatif yang digunakan dalam proses pelatihan (training) dan pengujian (testing) model.
          </p>
      </div>
    </div>
  );
};

export default SentimenBarChart;