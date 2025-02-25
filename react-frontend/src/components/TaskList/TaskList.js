import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskList.css';
import axios from 'axios';

export const TaskList = ({ logout }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '', description: '', dueDate: '', priority: '', completed: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:8080/api/tasks', {
      auth: { username: 'user', password: 'password' },
    });

    setTasks(response.data);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAddTask = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:8080/api/tasks', newTask, {
      auth: { username: 'user', password: 'password' },
    });

    fetchTasks();

    setNewTask({ title: '', description: '', dueDate: '', priority: '', completed: false });
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await axios.put(`http://localhost:8080/api/tasks/${id}`, updatedTask, {
      auth: { username: 'user', password: 'password' },
    });

    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/api/tasks/${id}`, {
      auth: { username: 'user', password: 'password' },
    });

    fetchTasks();
  };

  return (
    <div className="task-container">
      <button className="button-logout" onClick={handleLogout}>Logout</button>
      <h2>Task Manager</h2>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          placeholder="Title"
          required
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />

        <input
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />

        <input
          type="date"
          required
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />

        <select
          required
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li className="task-item" key={task.id}>
            <span>
              {`${task.title} ${task.description ? `- ${task.description}` : ""} - ${task.priority} - ${task.dueDate} - ${task.completed ? "Done" : "Pending"}`}
            </span>

            <div>
              <button
                className="toggle"
                onClick={() => handleUpdateTask(task.id, { ...task, completed: !task.completed })}
              >
                Toggle
              </button>
              
              <button
                className="delete"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
