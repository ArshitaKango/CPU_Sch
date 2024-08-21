import React from 'react';

const Statistics = ({ waitingTimes, turnAroundTimes, relaxationTimes }) => {
    // Calculate average with a fallback to 0 if the array is empty
    const average = (arr) => arr.length > 0 ? (arr.reduce((acc, val) => acc + val, 0) / arr.length).toFixed(2) : '0.00';

    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">Statistics</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-400">
            <span>Average Waiting Time:</span>
            <span>{average(waitingTimes)}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Average Turnaround Time:</span>
            <span>{average(turnAroundTimes)}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Average Relaxation Time:</span>
            <span>{average(relaxationTimes)}</span>
          </div>
        </div>
      </div>
    );
};

export default Statistics;
