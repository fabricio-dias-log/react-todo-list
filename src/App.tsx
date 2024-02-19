import React, {useState} from 'react';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// Interfaces
import { ITask } from './interfaces/Task';

// CSS
import styles from './App.module.css';

function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  return (
    <div>
      <Header/>
      <main className={styles.main}>
      <div>
        <h2>O que você vai fazer?</h2>
        <TaskForm btnText='Criar Tarefa' taskList={tasksList} setTaskList={setTasksList}/>
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <TaskList/>
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
