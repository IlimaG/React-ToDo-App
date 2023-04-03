import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [importance, setImportance] = useState(1);
  const [label, setLabel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({
      id: Date.now(),
      text,
      importance,
      label,
      date: new Date(),
      completed: false,
    });
    setText('');
    setImportance(1);
    setLabel('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="3"
        value={importance}
        onChange={(e) => setImportance(e.target.value)}
      />
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

  export default TodoForm