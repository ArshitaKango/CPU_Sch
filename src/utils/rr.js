// utils/rr.js
export const rr = (processes, timeQuantum) => {
    if (!Array.isArray(processes) || processes.length === 0) {
      return { metrics: { avgWaitingTime: 0, avgTurnaroundTime: 0, relaxationTime: 0 }, scheduledProcesses: [] };
    }
  
    let currentTime = 0;
    let totalWaitTime = 0;
    let totalTurnaroundTime = 0;
  
    const waitTimes = Array(processes.length).fill(0);
    const turnaroundTimes = Array(processes.length).fill(0);
    const remainingBurstTimes = processes.map(p => p.burstTime);
    const arrivalTimes = processes.map(p => p.arrivalTime);
    const processQueue = [...processes];
    
    while (processQueue.length > 0) {
      const process = processQueue.shift();
      const time = Math.min(remainingBurstTimes[process.index], timeQuantum);
  
      currentTime = Math.max(currentTime, process.arrivalTime);
      remainingBurstTimes[process.index] -= time;
      currentTime += time;
  
      if (remainingBurstTimes[process.index] > 0) {
        processQueue.push(process);
      }
  
      const waitTime = Math.max(0, currentTime - process.arrivalTime - process.burstTime);
      const turnaroundTime = waitTime + process.burstTime;
      waitTimes[process.index] += waitTime;
      turnaroundTimes[process.index] += turnaroundTime;
      totalWaitTime += waitTime;
      totalTurnaroundTime += turnaroundTime;
    }
  
    return {
      metrics: {
        avgWaitingTime: totalWaitTime / processes.length,
        avgTurnaroundTime: totalTurnaroundTime / processes.length,
        relaxationTime: totalWaitTime / processes.reduce((acc, p) => acc + p.burstTime, 0),
      },
      scheduledProcesses: processes
    };
  };
  