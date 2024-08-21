import React, { useState, useEffect } from 'react';
import ProcessQueue from './components/ProcessQueue';
import ProcessInputForm from './components/ProcessInputForm';
import AlgorithmSelector from './components/AlgorithmSelector';
import GanttChart from './components/GanttChart';
import Statistics from './components/Statistics';
import ProcessDetails from './components/ProcessDetails';

import { fcfs } from './utils/fcfs';


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
      
      default:
        result = { metrics: { avgWaitingTime: 0, avgTurnaroundTime: 0, relaxationTime: 0 }, scheduledProcesses: [] };
    }

    console.log('Calculation Result:', result); // Debugging line
  
   
    setWaitingTimes(result.waitingTimes);
    setTurnAroundTimes(result.turnaroundTimes);
    setRelaxationTimes(result.relaxationTimes);
  };
  

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
    <div className="container mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-8">CPU Scheduling Visualizer</h1>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <AlgorithmSelector selectedAlgorithm={selectedAlgorithm} onChange={setSelectedAlgorithm} />
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <ProcessInputForm onAddProcess={addProcess} />
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <ProcessQueue processes={processes} />
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <GanttChart processes={processes} schedulingAlgorithm={selectedAlgorithm} />
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <ProcessDetails 
          processes={processes} 
          waitingTimes={waitingTimes} 
          turnAroundTimes={turnAroundTimes} 
          relaxationTimes={relaxationTimes} 
        />
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <Statistics 
          waitingTimes={waitingTimes} 
          turnAroundTimes={turnAroundTimes} 
          relaxationTimes={relaxationTimes} 
        />
      </div>
    </div>
  </div>

  );
}

export default App;
