import React, { createContext, useReducer, useEffect } from 'react';

export const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    case 'TOGGLE_COMPLETE':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      storedTasks.forEach((task) => {
        dispatch({ type: 'ADD_TASK', payload: task });
      });
    }
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
