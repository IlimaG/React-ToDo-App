import { useContext, useEffect, useState } from 'react'
import { ToDoContext } from '../../context/ToDoContext'
import Card from '../Card/Card'
import './ToDoList.css'

const ToDoList = () => {
    const { toDoList, setToDoList, copyToDoList, setCopyToDoList} = useContext(ToDoContext)
    const [taskList, setTaskList] = useState([])
    const [isDoneToDO, setIsDoneToDO] = useState(true)

    useEffect(() => {


        let list = toDoList.map((task) => {

            let isDone = task.done ? 'done' : '';
            
            return (
                <div key={`${task.id.id}`}>
                    <div>
                        <button onClick={() => subtract(task.id.id)}>DELETE</button>
                        <button onClick={() => done(task.id.id)}>DONE</button>
                    </div>
                    <div>
                        <Card
                            text={`${task.text.tasks}`}
                            classname={isDone}
                            date={task.date.dayTimeStr}
                            priority={task.priority.priorityTask}
                            label={task.label.labels}
                        />
                    </div>
                </div>
            )
        })

        setTaskList(list)
    }, [isDoneToDO, toDoList])


    const subtract = (id) => {
        const subtactTodo = toDoList.filter((e) => {
            return e.id.id !== id
        })
        
        const subtactCopy = copyToDoList.filter((e) => {
            return e.id.id !== id
        })
        
        setCopyToDoList(subtactCopy)
        setToDoList(subtactTodo)
    }


    const done = (id) => {

        toDoList.forEach((e) => {
            if (e.id.id === id) {

                if (e.done === false) {
                    e.done = true
                    copyToDoList[copyToDoList.indexOf(e)].done = true
                } else {
                    e.done = false
                }
            }
        })
    
        setIsDoneToDO(!isDoneToDO)
    }


    return (
        <div>
            {taskList}
        </div>
    )
}

export default ToDoList

















