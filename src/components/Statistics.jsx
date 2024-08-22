import React from 'react';

const Statistics = ({ waitingTimes, turnAroundTimes }) => {
  const round = (num) => {
    return num.toFixed(2);
  };
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">Statistics</h2>
        <div className="space-y-5">
          <div className="flex justify-between items-center text-gray-300 text-lg">
            <span className="font-medium">Average Waiting Time:</span>
            <span className="font-bold text-teal-400">{round(waitingTimes)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-300 text-lg">
            <span className="font-medium">Average Turnaround Time:</span>
            <span className="font-bold text-teal-400">{round(turnAroundTimes)}</span>
          </div>
        </div>
      </div>
    );
};

export default Statistics;
