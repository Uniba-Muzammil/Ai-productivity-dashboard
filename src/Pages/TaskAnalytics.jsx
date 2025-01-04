import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TaskAnalytics = ({ tasks }) => {
  // Prepare the data for chart
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completedRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  const taskData = {
    labels: ['Tasks Completed', 'Tasks Pending'],
    datasets: [
      {
        label: 'Task Completion Rate',
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ['#4caf50', '#ff5722'],
        borderColor: ['#4caf50', '#ff5722'],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: tasks.map((task, index) => `Task ${index + 1}`),
    datasets: [
      {
        label: 'Completion Status',
        data: tasks.map((task) => (task.completed ? 1 : 0)), // 1 for completed, 0 for pending
        fill: false,
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-8">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center">Task Analytics</h2>

      {/* Pie Chart for Task Completion vs Pending */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-white text-center mb-4">Task Completion vs Pending</h3>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Line data={taskData} />
        </div>
      </div>

      {/* Line Chart for Task Completion Status */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-white text-center mb-4">Task Completion Progress</h3>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Line data={lineChartData} />
        </div>
      </div>

      {/* Completion Rate */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-semibold text-white text-center">
          Overall Task Completion Rate: <span className="font-bold">{completedRate.toFixed(2)}%</span>
        </h3>
      </div>
    </div>
  );
};

export default TaskAnalytics;

