import React, { useState, useEffect } from 'react';
import ProcessQueue from './components/ProcessQueue';
import ProcessInputForm from './components/ProcessInputForm';
import AlgorithmSelector from './components/AlgorithmSelector';
import GanttChart from './components/GanttChart';
import Statistics from './components/Statistics';
import ProcessDetails from './components/ProcessDetails';

import { fcfs } from './utils/fcfs';
import { sjf } from './utils/sjf';
import { rr } from './utils/rr';
import { priority } from './utils/priority';

const App = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('fcfs');
  const [processes, setProcesses] = useState([]);
  const [waitingTimes, setWaitingTimes] = useState([]);
  const [turnAroundTimes, setTurnAroundTimes] = useState([]);
  const [relaxationTimes, setRelaxationTimes] = useState([]);

  useEffect(() => {
    if (processes.length > 0) {
      calculateStatistics();
    }
  }, [processes, selectedAlgorithm]);

  const addProcess = (process) => {
    setProcesses([...processes, process]);
  };

  const calculateStatistics = () => {
    let result;
  
    // Choose algorithm based on selectedAlgorithm
    switch (selectedAlgorithm) {
      case 'fcfs':
        result = fcfs(processes);
        break;
      case 'sjf':
        result = sjf(processes);
        break;
      case 'rr':
        // Assume timeQuantum is a fixed value; adjust as needed
        result = rr(processes, 4);
        break;
      case 'priority':
        result = priority(processes);
        break;
      default:
        result = { metrics: { avgWaitingTime: 0, avgTurnaroundTime: 0, relaxationTime: 0 }, scheduledProcesses: [] };
    }

    console.log('Calculation Result:', result); // Debugging line
  
    setWaitingTimes(result.processDetails.map(p => p.waitingTime));
    setTurnAroundTimes(result.processDetails.map(p => p.turnAroundTime));
    setRelaxationTimes(result.processDetails.map(p => p.relaxationTime));
  };
  

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-400 mb-8">CPU Scheduling Visualizer</h1>
        <AlgorithmSelector selectedAlgorithm={selectedAlgorithm} onChange={setSelectedAlgorithm} />
        <ProcessInputForm onAddProcess={addProcess} />
        <ProcessQueue processes={processes} />
        <GanttChart processes={processes} schedulingAlgorithm={selectedAlgorithm} />
        <ProcessDetails 
          processes={processes} 
          waitingTimes={waitingTimes} 
          turnAroundTimes={turnAroundTimes} 
          relaxationTimes={relaxationTimes} 
        />
        <Statistics waitingTimes={waitingTimes} turnAroundTimes={turnAroundTimes} relaxationTimes={relaxationTimes} />
        
      </div>
    </div>
  );
}

export default App;
