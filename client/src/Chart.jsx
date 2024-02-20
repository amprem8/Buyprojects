// Chart.js
import React from 'react';
import './Chart.css';

const Chart = () => {
  // Sample data for the chart
  const data = [5, 10, 15, 20, 25];
  
  // Calculate the maximum value in the data array
  const maxValue = Math.max(...data);
  
  return (
    <div className="chart">
      {/* Render bars based on data */}
      {data.map((value, index) => (
        <div
          key={index}
          className="bar"
          style={{ height: `${(value / maxValue) * 100}%` }}
        ></div>
      ))}
    </div>
  );
};

export default Chart;
