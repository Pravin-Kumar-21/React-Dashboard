import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', LinesDeleted: 4000, LinesAdded: 2400 },
  { name: 'Feb', LinesDeleted: 3000, LinesAdded: 1398 },
  { name: 'Mar', LinesDeleted: 2000, LinesAdded: 9800 },
  { name: 'Apr', LinesDeleted: 2780, LinesAdded: 3908 },
  { name: 'May', LinesDeleted: 1890, LinesAdded: 4800 },
  { name: 'Jun', LinesDeleted: 2390, LinesAdded: 3800 },
  { name: 'Jul', LinesDeleted: 3490, LinesAdded: 4300 },
];

const CustomTable = () => {
  const barChartData = [
    { name: 'Jan', LinesAdded: data[0].LinesAdded, LinesDeleted: data[0].LinesDeleted },
    { name: 'Feb', LinesAdded: data[1].LinesAdded, LinesDeleted: data[1].LinesDeleted },
    { name: 'Mar', LinesAdded: data[2].LinesAdded, LinesDeleted: data[2].LinesDeleted },
    { name: 'Apr', LinesAdded: data[3].LinesAdded, LinesDeleted: data[3].LinesDeleted },
    { name: 'May', LinesAdded: data[4].LinesAdded, LinesDeleted: data[4].LinesDeleted },
    { name: 'Jun', LinesAdded: data[5].LinesAdded, LinesDeleted: data[5].LinesDeleted },
    { name: 'Jul', LinesAdded: data[6].LinesAdded, LinesDeleted: data[6].LinesDeleted },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={barChartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="name" stroke="#333" />
        <YAxis stroke="#333" />
        <Tooltip contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }} />
        <Legend verticalAlign="top" height={36} />
        <Bar dataKey="LinesAdded" fill="#82ca9d" />
        <Bar dataKey="LinesDeleted" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomTable;
