import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
// Interfaces
import { ITask } from '../interfaces/Task';

//CSS
import styles from './TaskForm.module.css';

interface Props {
    btnText: string;
    task?: ITask | null;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({btnText, taskList, setTaskList, task}: Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>(0);

    useEffect(() => {
        if(task){
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setId(Math.floor(Math.random() * 1000));

        const newTask: ITask = {id, title, difficulty};

        setTaskList!([...taskList, newTask]);

        setTitle('');
        setDifficulty(0);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value);
        } else {
            setDifficulty(parseInt(e.target.value));
        }
    };

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título</label>
                <input type="text" id="title" name="title" placeholder='Titulo da tarefa' onChange={handleChange} value={title}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" id="difficulty" name="difficulty" placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm