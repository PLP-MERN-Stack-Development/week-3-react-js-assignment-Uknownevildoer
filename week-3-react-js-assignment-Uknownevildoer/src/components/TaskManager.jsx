// components/TaskManager.jsx
import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';


const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const { isDark, toggleTheme } = useTheme();

  const addTask = (text) => {
    if (!text.trim()) return;
    const newEntry = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newEntry]);
    setNewTask('');
  };

  const toggleComplete = (id) =>
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  const deleteTask = (id) =>
    setTasks(tasks.filter(task => task.id !== id));

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Task Manager</h2>
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
          Toggle {isDark ? 'Light' : 'Dark'} Mode
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task..."
          className="flex-grow px-4 py-2 border rounded dark:bg-gray-700"
        />
        <Button type="submit">Add</Button>
      </form>

      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <Button
            key={f}
            size="sm"
            variant={filter === f ? 'primary' : 'secondary'}
            onClick={() => setFilter(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 text-center">No tasks</li>
        ) : (
          filteredTasks.map(task => (
            <li
              key={task.id}
              className="flex justify-between items-center p-3 border rounded dark:border-gray-600"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="h-5 w-5 text-blue-600 rounded"
                />
                <span className={task.completed ? 'line-through text-gray-500' : ''}>
                  {task.text}
                </span>
              </div>
              <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        {tasks.filter(task => !task.completed).length} tasks remaining
      </p>
    </div>
  );
};

export default TaskManager;
