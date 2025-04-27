import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ text, category });
      setText("");
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
