import React, { useState, useEffect } from 'react';

const Insights = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    setTotalTasks(tasks.length);
    setCompletedTasks(tasks.filter((task) => task.completed).length);
  }, [tasks]);

  const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Insights</h2>

      {/* Insights Display */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Total Tasks</h3>
          <p className="text-4xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Completed Tasks</h3>
          <p className="text-4xl font-bold">{completedTasks}</p>
        </div>
        <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Completion Rate</h3>
          <p className="text-4xl font-bold">{completionRate.toFixed(2)}%</p>
        </div>
      </div>

      {/* Task Breakdown */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Task Breakdown</h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Completed Tasks</span>
            <span className="text-lg font-semibold text-green-600">{completedTasks}</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Pending Tasks</span>
            <span className="text-lg font-semibold text-red-600">
              {totalTasks - completedTasks}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Insights;


