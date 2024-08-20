export const fcfs = (processes) => {
  // Sort processes by arrival time
  processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

  let currentTime = 0;
  const waitingTimes = [];
  const turnaroundTimes = [];
  const relaxationTimes = [];
  
  processes.forEach((process, index) => {
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
  const avgWaitingTime = waitingTimes.reduce((a, b) => a + b, 0) / waitingTimes.length;
  const avgTurnaroundTime = turnaroundTimes.reduce((a, b) => a + b, 0) / turnaroundTimes.length;
  const avgRelaxationTime = relaxationTimes.reduce((a, b) => a + b, 0) / relaxationTimes.length;

  return {
    metrics: {
      avgWaitingTime: avgWaitingTime,
      avgTurnaroundTime: avgTurnaroundTime,
      relaxationTime: avgRelaxationTime,
    },
    processDetails: processes.map((process, index) => ({
      ...process,
      waitingTime: waitingTimes[index],
      turnAroundTime: turnaroundTimes[index],
      relaxationTime: relaxationTimes[index],
    }))
  };
};
