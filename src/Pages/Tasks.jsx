import React, { useState, useEffect } from 'react';

const Tasks = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
        dueDate: new Date().toISOString().split('T')[0], // Assign current date as due date for now
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const generateTaskSuggestions = () => {
    const overdueTasks = tasks.filter(
      (task) => new Date(task.dueDate) < new Date() && !task.completed
    );

    const highPriorityTasks = tasks.filter(
      (task) => !task.completed && task.dueDate === new Date().toISOString().split('T')[0]
    );

    const newSuggestions = [];
    if (overdueTasks.length > 0) {
      newSuggestions.push('You have overdue tasks. Consider completing them first!');
    }
    if (highPriorityTasks.length > 0) {
      newSuggestions.push('You have tasks for today. Make sure to complete them.');
    }
    if (newSuggestions.length === 0) {
      newSuggestions.push('All tasks are on track! Keep it up!');
    }

    setSuggestions(newSuggestions);
  };

  useEffect(() => {
    generateTaskSuggestions();
  }, [tasks]);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Task Manager</h2>

      {/* Add Task Input */}
      <div className="flex mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition duration-200"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 flex justify-between items-center border rounded-lg ${
              task.completed ? 'bg-green-200 text-gray-500 line-through' : 'bg-white'
            } hover:bg-gray-50 transition-all duration-200`}
          >
            {/* Task Text */}
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className="cursor-pointer flex-grow"
            >
              {task.text}
            </span>

            {/* Delete Button */}
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 transition duration-200"
            >
              Delete
            </button>

            {/* Completion Button (Placed on the Right) */}
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className={`px-2 py-2 rounded-md ${
                task.completed ? 'bg-gray-500' : 'bg-white'
              } text-neutral-950 hover:bg-opacity-80 ml-4`}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>

      {/* AI Suggestions */}
      <div className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">AI Suggestions:</h3>
        <ul className="list-disc pl-6">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="text-md">{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;




