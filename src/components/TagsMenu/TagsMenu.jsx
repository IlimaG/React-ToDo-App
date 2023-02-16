import { useContext, useEffect, useState } from 'react'
import { ToDoContext } from '../../context/ToDoContext'
import './TagsMenu.css'





const TagsMenu = () => {

    const { toDoList, setToDoList, copyToDoList, setCopyToDoList } = useContext(ToDoContext)
    const [allToDO, setAllToDo] = useState(false)
    const [labels, setLabels] = useState([])

    useEffect(() => {    
        
        let printLabel = []

        toDoList.forEach(e => {
            if (!printLabel.includes(e.label.labels)) {
                printLabel.push(e.label.labels)
            } 
        });

        setLabels(printLabel)
    }, [toDoList])

    
    
    const filterTaskForLabel = (label) => {
        const filterLabel = toDoList.filter((e) => {
            return e.label.labels === label             
        })
        // setAllToDo(!allToDO)
        setToDoList(filterLabel)
    }

    const showAllTask = () => {
        const allTask = copyToDoList

        setToDoList(allTask)
    }


    return (

        <div>
            {labels.map((e) => {
                return (
                    <button onClick={() => filterTaskForLabel(e)} key={e}>#{e}</button>
                )
            })}
            <button onClick={() => showAllTask()}>All</button>
        </div>
    )
}

export default TagsMenu