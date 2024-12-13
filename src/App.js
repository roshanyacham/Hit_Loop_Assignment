// import React from 'react';
// import AddTask from './components/AddTask';
// import TaskList from './components/TaskList';
// import TaskProvider from './context/TaskContext';
// import './App.css';


// const App = () => {
//   return (
//     <TaskProvider>
//       <div>
//         <h1>To-Do App</h1>
//         <AddTask />
//         <TaskList />
//       </div>
//     </TaskProvider>
//   );
// };

// export default App;
import React, { useState } from 'react';
import TaskProvider from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TaskProvider>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <header>
          <h1>To-Do App</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
