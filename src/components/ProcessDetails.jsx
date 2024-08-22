import React, { useState, useEffect } from 'react';

const ProcessDetails = ({ processes , setWaitingTime , setTAT }) => {
  const [processDetails, setProcessDetails] = useState([]);
   console.log("Processes are  : " , processes) ;   
  useEffect(() => {
    let at = 0, ct = 0, tt = 0, wt = 0, rt = 0;
    let totalWait = 0 , totalTAT = 0 ;  
    const computedResults = processes.map((process) => {
      wt = Math.max(0, at - process.arrivalTime);
      at = Math.max(at, process.arrivalTime);
      ct = at + Number(process.burstTime);
      tt = ct - Number(process.arrivalTime);
      console.log("Turn around time = " , tt  ,  " ct = " , ct , " arrival time = " ,  process.arrivalTime  , " burst time : " , process.burstTime);
      rt = tt / process.burstTime;
      at = ct;
      totalWait += wt ; 
      totalTAT += tt ;  
      return {
        arrivalTime: process.arrivalTime,
        burstTime: process.burstTime,
        waitingTime: wt,
        completionTime: ct,
        turnaroundTime: tt,
        relaxationTime: rt.toFixed(2), 
      };
    });
    setWaitingTime(totalWait/processes.length) ;  
    setTAT(totalTAT/processes.length) ;  
    setProcessDetails(computedResults);
  }, [processes]);

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
            <th className="px-6 py-3 text-teal-400 font-semibold">Completion Time</th>
            <th className="px-6 py-3 text-teal-400 font-semibold">Waiting Time</th>
            <th className="px-6 py-3 text-teal-400 font-semibold">Turnaround Time</th>
            
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
              <td className="px-6 py-3 text-center">{formatNumber(process.completionTime)}</td>
              <td className="px-6 py-3 text-center">{formatNumber(process.waitingTime)}</td>
              <td className="px-6 py-3 text-center">{formatNumber(process.turnaroundTime)}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessDetails;
