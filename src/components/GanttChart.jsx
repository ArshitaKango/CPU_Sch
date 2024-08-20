import React from 'react';

const GanttChart = ({ processes }) => {
  const calculateGridPosition = (process) => {
    return {
      gridColumnStart: process.arrivalTime + 1, // Adjust for grid column start
      gridColumnEnd: process.arrivalTime + process.burstTime + 1,
    };
  };

  const maxBurstTime = Math.max(...processes.map(p => p.burstTime), 1); // Prevent divide by zero

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">Gantt Chart</h2>
      <div
        className="gantt-chart-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(20, 1fr)`, // Adjust number of columns as needed
          gridGap: '4px',
          overflowX: 'auto', // Ensure horizontal scrolling if needed
        }}
      >
        {processes.map((process, index) => {
          const gridPosition = calculateGridPosition(process);
          const processNumber = index + 1;
          const barWidth = `${(process.burstTime / maxBurstTime) * 100}%`; // Adjust bar width relative to burst time

          return (
            <div
              key={index}
              className="gantt-bar"
              style={{
                ...gridPosition,
                backgroundColor: 'teal',
                textAlign: 'center',
                color: 'white',
                padding: '4px',
                borderRadius: '6px',
                width: barWidth,
              }}
            >
              {`P${processNumber}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GanttChart;
