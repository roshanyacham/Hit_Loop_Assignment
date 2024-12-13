import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../Styles/TaskItem.css';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'EDIT_TASK',
      payload: { id: task.id, title, description, priority, dueDate },
    });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.priority.toLowerCase()} ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          {task.dueDate && <p>Due: {task.dueDate}</p>}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: { id: task.id } })}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: { id: task.id } })}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
