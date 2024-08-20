import React from 'react';

const ProcessQueue = ({ processes }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-teal-400 mb-4">Process Queue</h2>
      <ul className="space-y-2">
        {processes.length === 0 ? (
          <li className="text-gray-400 text-center">No processes added</li>
        ) : (
          processes.map((process, index) => (
            <li key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
              <span className="text-teal-200 font-bold">{`Process ${index + 1}`}</span>
              <span className="text-teal-400 font-semibold">{`Arrival Time: ${process.arrivalTime}`}</span>
              <span className="text-teal-400 font-semibold">{`Burst Time: ${process.burstTime}`}</span>
              <span className="text-teal-400 font-semibold">{`Priority ${process.priority}`}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProcessQueue;
