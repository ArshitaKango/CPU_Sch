// utils/priority.js
export const priority = (processes) => {
    if (!Array.isArray(processes) || processes.length === 0) {
      return { metrics: { avgWaitingTime: 0, avgTurnaroundTime: 0, relaxationTime: 0 }, scheduledProcesses: [] };
    }
  
    // Sort processes by priority
    const sortedProcesses = [...processes].sort((a, b) => a.priority - b.priority);
  
    let currentTime = 0;
    let totalWaitTime = 0;
    let totalTurnaroundTime = 0;
  
    const waitTimes = [];
    const turnaroundTimes = [];
  
    sortedProcesses.forEach(process => {
      const waitTime = Math.max(0, currentTime - process.arrivalTime);
      const turnaroundTime = waitTime + process.burstTime;
      waitTimes.push(waitTime);
      turnaroundTimes.push(turnaroundTime);
      totalWaitTime += waitTime;
      totalTurnaroundTime += turnaroundTime;
      currentTime = Math.max(currentTime, process.arrivalTime) + process.burstTime;
    });
  
    return {
      metrics: {
        avgWaitingTime: totalWaitTime / processes.length,
        avgTurnaroundTime: totalTurnaroundTime / processes.length,
        relaxationTime: totalWaitTime / processes.reduce((acc, p) => acc + p.burstTime, 0),
      },
      scheduledProcesses: sortedProcesses
    };
  };
  