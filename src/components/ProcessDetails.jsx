import React from 'react';

const ProcessDetails = ({ processes, waitingTimes, turnAroundTimes, relaxationTimes }) => {
  // Create processDetails array with default values if necessary
  const processDetails = processes.map((process, index) => ({
    ...process,
    waitingTime: waitingTimes[index] !== undefined ? waitingTimes[index] : 0,
    turnAroundTime: turnAroundTimes[index] !== undefined ? turnAroundTimes[index] : 0,
    relaxationTime: relaxationTimes[index] !== undefined ? relaxationTimes[index] : 0,
  }));

  // Format numbers safely
  const formatNumber = (num) => (typeof num === 'number' ? num.toFixed(2) : '0.00');

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">Process Details</h2>
      <table className="w-full table-auto text-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-teal-400">Process</th>
            <th className="px-4 py-2 text-teal-400">Arrival Time</th>
            <th className="px-4 py-2 text-teal-400">Burst Time</th>
            <th className="px-4 py-2 text-teal-400">Waiting Time</th>
            <th className="px-4 py-2 text-teal-400">Turnaround Time</th>
            <th className="px-4 py-2 text-teal-400">Relaxation Time</th>
          </tr>
        </thead>
        <tbody>
          {processDetails.map((process, index) => (
            <tr key={index} className="bg-gray-700">
              <td className="px-4 py-2">{`P${index + 1}`}</td>
              <td className="px-4 py-2">{process.arrivalTime}</td>
              <td className="px-4 py-2">{process.burstTime}</td>
              <td className="px-4 py-2">{formatNumber(process.waitingTime)}</td>
              <td className="px-4 py-2">{process.turnAroundTime}</td>
              <td className="px-4 py-2">{formatNumber(process.relaxationTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessDetails;
