import { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, text);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  const importanceColor = () => {
    switch (todo.importance) {
      case '1':
        return 'green';
      case '2':
        return 'orange';
      case '3':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : '',
              color: importanceColor(),
            }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>{' '}
          <span>({todo.label})</span>{' '}
          <span>{todo.date.toLocaleDateString()}</span>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
  export default TodoItem