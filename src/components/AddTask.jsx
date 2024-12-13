import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../Styles/AddTask.css';

const AddTask = () => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setTitle('');
    setDescription('');
    setPriority('');
    setDueDate('');
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
