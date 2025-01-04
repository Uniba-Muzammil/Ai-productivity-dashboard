import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Dashboard</h2>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-medium uppercase tracking-wide">Total Tasks</h3>
          <p className="text-4xl font-extrabold">{totalTasks}</p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-green-400 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-medium uppercase tracking-wide">Completed Tasks</h3>
          <p className="text-4xl font-extrabold">{completedTasks}</p>
        </div>
        <div className="bg-gradient-to-r from-red-400 to-orange-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-medium uppercase tracking-wide">Pending Tasks</h3>
          <p className="text-4xl font-extrabold">{pendingTasks}</p>
        </div>
      </div>

      {/* Task Completion Rate */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">Task Completion Rate</h3>
        <p className="text-5xl font-extrabold text-gray-800">{completionRate.toFixed(2)}%</p>
      </div>

      {/* AI Suggestions */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">AI Productivity Suggestions</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          {tasks.length === 0 ? (
            <li className="text-md">You don’t have any tasks yet. Start by adding one!</li>
          ) : (
            <li className="text-md">
              {completedTasks < totalTasks
                ? 'Consider completing pending tasks to boost your productivity!'
                : 'Great job! You’ve completed all your tasks.'}
            </li>
          )}
        </ul>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/tasks"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Manage Tasks
        </Link>
        <Link
          to="/calendar"
          className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          View Calendar
        </Link>
        <Link
          to="/insights"
          className="bg-gradient-to-r from-green-500 to-lime-500 text-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-green-600 transition duration-300"
        >
          View Insights
        </Link>
        <Link
          to="/analytics"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-purple-600 transition duration-300"
        >
          Task Analytics
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;


