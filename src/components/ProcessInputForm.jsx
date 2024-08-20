import React, { useState } from 'react';

const ProcessInputForm = ({ onAddProcess }) => {
  const [process, setProcess] = useState({ arrivalTime: '', burstTime: '', priority: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProcess(process);
    setProcess({ arrivalTime: '', burstTime: '', priority: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg mb-6">
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block text-gray-400 mb-2">Arrival Time</label>
          <input 
            type="number" 
            value={process.arrivalTime} 
            onChange={(e) => setProcess({ ...process, arrivalTime: e.target.value })} 
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-400 mb-2">Burst Time</label>
          <input 
            type="number" 
            value={process.burstTime} 
            onChange={(e) => setProcess({ ...process, burstTime: e.target.value })} 
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-400 mb-2">Priority (Optional)</label>
          <input 
            type="number" 
            value={process.priority} 
            onChange={(e) => setProcess({ ...process, priority: e.target.value })} 
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
      </div>
      <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300">Add Process</button>
    </form>
  );
}

export default ProcessInputForm;
