import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";




const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('default');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const editTodo = (id, text) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        } else {
          return todo;
        }
      })
    );
  };

  const filterTodos = () => {
    switch (filter) {
      case 'date':
        return [...todos].sort((a, b) => b.date - a.date);
      case 'importance':
        return [...todos].sort((a, b) => a.importance - b.importance);
      case 'label':
        return [...todos].sort((a, b) => a.label.localeCompare(b.label));
      case 'alphabetical':
        return [...todos].sort((a, b) => a.text.localeCompare(b.text));
      default:
        return todos;
    }
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="default">Default</option>
        <option value="date">Date</option>
        <option value="importance">Importance</option>
        <option value="label">Label</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
      <ul>
        {filterTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </>
  );
};


export default TodoList