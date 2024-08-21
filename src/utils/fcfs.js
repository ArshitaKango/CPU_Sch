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


  return {
   
    processDetails: processes.map((process, index) => ({
      ...process,
      waitingTime: waitingTimes[index],
      turnAroundTime: turnaroundTimes[index],
      relaxationTime: relaxationTimes[index],
    }))
  };
};
