import React, { useState } from 'react';

const ProcessInputForm = ({ onAddProcess }) => {
  const [process, setProcess] = useState({ arrivalTime: '', burstTime: '', priority: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProcess(process);
    setProcess({ arrivalTime: '', burstTime: '', priority: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-300 mb-2">Arrival Time</label>
          <input 
            type="number" 
            value={process.arrivalTime} 
            onChange={(e) => setProcess({ ...process, arrivalTime: e.target.value })} 
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-300 mb-2">Burst Time</label>
          <input 
            type="number" 
            value={process.burstTime} 
            onChange={(e) => setProcess({ ...process, burstTime: e.target.value })} 
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-300 mb-2">Priority (Optional)</label>
          <input 
            type="number" 
            value={process.priority} 
            onChange={(e) => setProcess({ ...process, priority: e.target.value })} 
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
          />
        </div>
      </div>
      <button 
        type="submit" 
        className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300 shadow-md hover:shadow-lg"
      >
        Add Process
      </button>
    </form>
  );
}

export default ProcessInputForm;
