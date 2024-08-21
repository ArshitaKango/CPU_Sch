import React from 'react';

const ProcessQueue = ({ processes }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-bold text-teal-500 mb-6">Process Queue</h2>
      <ul className="space-y-4">
        {processes.length === 0 ? (
          <li className="text-gray-400 text-center text-lg">No processes added</li>
        ) : (
          processes.map((process, index) => (
            <li 
              key={index} 
              className="bg-gray-800 p-4 rounded-lg flex flex-col space-y-2"
            >
              
              <div className="flex justify-between text-teal-400 font-semibold">
              <span className="text-teal-300 font-bold text-lg">{`Process ${index + 1}`}</span>
                <span>{`Arrival Time: ${process.arrivalTime}`}</span>
                <span>{`Burst Time: ${process.burstTime}`}</span>
                <span>{`Priority: ${process.priority}`}</span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProcessQueue;
