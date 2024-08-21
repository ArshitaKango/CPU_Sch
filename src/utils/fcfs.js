export const fcfs = (processes) => {
  // Sort processes by arrival time
  processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

  let currentTime = 0;
  const waitingTimes = [];
  const turnaroundTimes = [];
  const relaxationTimes = [];
  
  processes.forEach((process) => {
    // Calculate waiting time
    const waitTime = Math.max(currentTime - process.arrivalTime, 0);
    waitingTimes.push(waitTime);

    // Calculate turnaround time
    const turnAroundTime = waitTime + process.burstTime;
    turnaroundTimes.push(turnAroundTime);

    // Calculate relaxation time
    const relaxationTime = waitTime / process.burstTime;
    relaxationTimes.push(relaxationTime);

    // Update current time
    currentTime = process.arrivalTime + turnAroundTime;
  });

  // Calculate average waiting time, turnaround time, and relaxation time
  const avgWaitingTime = waitingTimes.length > 0 ? waitingTimes.reduce((a, b) => a + b, 0) / waitingTimes.length : 0;
  const avgTurnaroundTime = turnaroundTimes.length > 0 ? turnaroundTimes.reduce((a, b) => a + b, 0) / turnaroundTimes.length : 0;
  const avgRelaxationTime = relaxationTimes.length > 0 ? relaxationTimes.reduce((a, b) => a + b, 0) / relaxationTimes.length : 0;

  return {
    metrics: {
      avgWaitingTime: avgWaitingTime,
      avgTurnaroundTime: avgTurnaroundTime,
      avgRelaxationTime: avgRelaxationTime,
    },
    processDetails: processes.map((process, index) => ({
      ...process,
      waitingTime: waitingTimes[index],
      turnAroundTime: turnaroundTimes[index],
      relaxationTime: relaxationTimes[index],
    }))
  };
};
