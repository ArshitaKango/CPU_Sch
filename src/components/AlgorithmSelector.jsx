import React from 'react';

const AlgorithmSelector = ({ selectedAlgorithm, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-white mb-3">CPU Scheduling Algorithm</label>
      <select 
        value={selectedAlgorithm} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-transform transform hover:scale-105"
      >
        <option value="fcfs" className="text-gray-800">First Come First Serve (FCFS)</option>
       
      </select>
    </div>
  );
}

export default AlgorithmSelector;
