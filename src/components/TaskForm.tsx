import React from 'react'

interface Props {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
        <div>
            <label htmlFor="title">Título</label>
            <input type="text" id="title" name="title" placeholder='Titulo da tarefa'/>
        </div>
        <div>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" id="difficulty" name="difficulty" placeholder='Dificuldade da tarefa'/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm