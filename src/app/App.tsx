import * as React from 'react';
import { AddNewTask, ListTask } from './features';
import { Task } from '../interface';
import './App.css';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  return (
    <div className="App">
      <header className="app-header"> ToDo </header>
      <main className="app-main-section">
        <AddNewTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

export default App;
