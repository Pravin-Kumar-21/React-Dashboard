// src/components/Chart.js
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, defs, linearGradient
} from 'recharts';

const data = [
  { name: 'Jan', LinesDeleted: 4000, LinesAdded: 2400, amt: 2400 },
  { name: 'Feb', LinesDeleted: 3000, LinesAdded: 1398, amt: 2210 },
  { name: 'Mar', LinesDeleted: 2000, LinesAdded: 9800, amt: 2290 },
  { name: 'Apr', LinesDeleted: 2780, LinesAdded: 3908, amt: 2000 },
  { name: 'May', LinesDeleted: 1890, LinesAdded: 4800, amt: 2181 },
  { name: 'Jun', LinesDeleted: 2390, LinesAdded: 3800, amt: 2500 },
  { name: 'Jul', LinesDeleted: 3490, LinesAdded: 4300, amt: 2100 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" stroke="#333" />
        <YAxis stroke="#333" />
        <Tooltip contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }} />
        <Legend verticalAlign="top" height={36} />
        <Area type="monotone" dataKey="LinesAdded" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="LinesDeleted" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
