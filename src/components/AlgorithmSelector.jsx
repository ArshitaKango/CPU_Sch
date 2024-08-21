import React from 'react';

const AlgorithmSelector = ({ selectedAlgorithm, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-400 mb-2">CPU Scheduling Algorithm</label>
      <select 
        value={selectedAlgorithm} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full p-2 bg-gray-700 text-white rounded-lg"
      >
        <option value="fcfs">First Come First Serve (FCFS)</option>
        <option value="sjf">Shortest Job First (SJF)</option>
        <option value="rr">Round Robin (RR)</option>
        <option value="priority">Priority Scheduling</option>
      </select>
    </div>
  );
}

export default AlgorithmSelector;
