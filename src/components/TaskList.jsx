import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import '../Styles/TaskList.css';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter((task) =>
    filter === 'All'
      ? true
      : filter === 'Completed'
      ? task.completed
      : !task.completed
  );

  return (
    <div className="task-list">
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
      </div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks to display</p>
      )}
    </div>
  );
};

export default TaskList;
