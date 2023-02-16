import { createContext, useState } from "react";

const ToDoContext = createContext()

const ToDoListContextProvider = ({ children }) => {

    const [toDoList, setToDoList] = useState([])
    const [copyToDoList, setCopyToDoList] = useState([])
    const [labels, setLabels] = useState([])



    return (
        <ToDoContext.Provider value={{toDoList, setToDoList, copyToDoList, setCopyToDoList, labels, setLabels}}>
            {children}
        </ToDoContext.Provider>
    )
}

export {ToDoContext, ToDoListContextProvider}