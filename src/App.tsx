import React, {useState} from 'react';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
// Interfaces
import { ITask } from './interfaces/Task';

// CSS
import styles from './App.module.css';

function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTasksList(tasksList.filter(task => task.id !== id));
  }

  const hideOrShowModal = (display: boolean): void => {
    const modal = document.getElementById('modal');

    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  
  }

  return (
    <div>
      <Modal children={<TaskForm btnText='Editar Tarefa' task={taskToUpdate} taskList={tasksList} />}/>
      <Header/>
      <main className={styles.main}>
      <div>
        <h2>O que você vai fazer?</h2>
        <TaskForm btnText='Criar Tarefa' taskList={tasksList} setTaskList={setTasksList}/>
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <TaskList taskList={tasksList} handleDelete={deleteTask} handleEdit={editTask}/>
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
