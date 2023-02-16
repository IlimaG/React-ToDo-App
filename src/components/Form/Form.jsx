import { useContext, useState } from 'react'
import './Form.css'
import { ToDoContext } from '../../context/ToDoContext'


const Form = () => {

    const [tasks, setTasks] = useState(``)
    const [labels, setLabels] = useState('')
    const [priorityTask, setPriorityTask] = useState(0)
    const [id, setId] = useState(0)

    const handleTaskInput = (e) => setTasks(e.target.value)
    const handleLabelsInput = (e) => setLabels(e.target.value)
    const handlePriorityInput = (e) => setPriorityTask(e.target.value)

    const { setToDoList, setCopyToDoList, setPrintToDoList } = useContext(ToDoContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        setId(id + 1)

        const dayTime = new Date();
        const dayTimeStr = dayTime.toLocaleString();
        
        const taskInfo = {
            text: { tasks },
            label: { labels },
            id: { id },
            done: false,
            date: {dayTimeStr},
            priority: {priorityTask}
        }

        setToDoList(prev => [...prev, taskInfo])
        setCopyToDoList(prev => [...prev, taskInfo])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleTaskInput} />
            <input type="text" onChange={handleLabelsInput} />
            <select name="priority" id="priority" onChange={handlePriorityInput}>
                <option value="0" >Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form