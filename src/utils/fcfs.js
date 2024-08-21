export const fcfs = (processes) => {
  processes.sort((a, b) => {
    if (a.arrivalTime === b.arrivalTime) {
      return a.burstTime - b.burstTime;
    }
    return a.arrivalTime - b.arrivalTime;
  });

  const waitingTimes = new Array(processes.length).fill(0);
  const turnaroundTimes = new Array(processes.length).fill(0);
  const relaxationTimes = new Array(processes.length).fill(0);

  let currentTime = 0;

  processes.forEach((process, index) => {
    const startTime = Math.max(currentTime, process.arrivalTime);
    const waitTime = startTime - process.arrivalTime;
    waitingTimes[index] = waitTime;

    currentTime = startTime + process.burstTime;

    const turnAroundTime = currentTime - process.arrivalTime;
    turnaroundTimes[index] = turnAroundTime;

    const relaxationTime = process.burstTime > 0 ? waitTime / process.burstTime : 0;
    relaxationTimes[index] = relaxationTime;

  });

  console.log('Turnaround Times:', turnaroundTimes); // Log the turnaround times

  return {
    waitingTimes,
    turnaroundTimes,
    relaxationTimes
  };
};
