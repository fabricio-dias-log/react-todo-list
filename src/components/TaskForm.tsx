import React from 'react';
import styles from './TaskForm.module.css';

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título</label>
            <input type="text" id="title" name="title" placeholder='Titulo da tarefa'/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" id="difficulty" name="difficulty" placeholder='Dificuldade da tarefa'/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm