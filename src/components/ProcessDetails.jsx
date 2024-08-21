import React from 'react';

const ProcessDetails = ({ processes, waitingTimes, turnAroundTimes, relaxationTimes }) => {

  // Testing
  console.log('Processes:', processes);
  console.log('Waiting Times:', waitingTimes);
  console.log('Turnaround Times:', turnAroundTimes);
  console.log('Relaxation Times:', relaxationTimes);

  const processDetails = processes.map((process, index) => ({
    ...process,
    waitingTime: waitingTimes[index] !== undefined ? waitingTimes[index] : 0,
    turnAroundTime: turnAroundTimes[index] !== undefined ? turnAroundTimes[index] : 0,
    relaxationTime: relaxationTimes[index] !== undefined ? relaxationTimes[index] : 0,
  }));

  // Format numbers safely
  const formatNumber = (num) => (typeof num === 'number' ? num.toFixed(2) : '0.00');

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Process Details</h2>
      <table className="w-full table-auto text-gray-300 border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 text-teal-400 font-semibold">Process</th>
            <th className="px-6 py-3 text-teal-400 font-semibold">Arrival Time</th>
            <th className="px-6 py-3 text-teal-400 font-semibold">Burst Time</th>
            <th className="px-6 py-3 text-teal-400 font-semibold">Waiting Time</th>
            <th className="px-6 py-3 text-teal-400 font-semibold">Turnaround Time</th>
            <th className="px-6 py-3 text-teal-400 font-semibold">Relaxation Time</th>
          </tr>
        </thead>
        <tbody>
          {processDetails.map((process, index) => (
            <tr 
              key={index} 
              className={`bg-gray-800 ${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'} hover:bg-gray-500 transition-colors`}
            >
              <td className="px-6 py-3 text-center">{`P${index + 1}`}</td>
              <td className="px-6 py-3 text-center">{process.arrivalTime}</td>
              <td className="px-6 py-3 text-center">{process.burstTime}</td>
              <td className="px-6 py-3 text-center">{formatNumber(process.waitingTime)}</td>
              <td className="px-6 py-3 text-center">{formatNumber(process.turnAroundTime)}</td>
              <td className="px-6 py-3 text-center">{formatNumber(process.relaxationTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessDetails;
