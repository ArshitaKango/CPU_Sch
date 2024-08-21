import React from 'react';

const Statistics = ({ waitingTimes, turnAroundTimes, relaxationTimes }) => {
    // Calculate average with a fallback to 0 if the array is empty
    const average = (arr) => arr.length > 0 ? (arr.reduce((acc, val) => acc + val, 0) / arr.length).toFixed(2) : '0.00';

    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">Statistics</h2>
        <div className="space-y-5">
          <div className="flex justify-between items-center text-gray-300 text-lg">
            <span className="font-medium">Average Waiting Time:</span>
            <span className="font-bold text-teal-400">{average(waitingTimes)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-300 text-lg">
            <span className="font-medium">Average Turnaround Time:</span>
            <span className="font-bold text-teal-400">{average(turnAroundTimes)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-300 text-lg">
            <span className="font-medium">Average Relaxation Time:</span>
            <span className="font-bold text-teal-400">{average(relaxationTimes)}</span>
          </div>
        </div>
      </div>
    );
};

export default Statistics;
