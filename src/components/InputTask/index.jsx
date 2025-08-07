import { useState } from "react";

const InputTask = ({ dispatch }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text.trim() === "") {
      setError("Нелья добавить пустую задачу");
    } else {
      dispatch({
        type: "add",
        payload: { id: crypto.randomUUID(), task: text, isDone: false },
      });
      setError("");
      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите текст задачи..."
      />
      {error}
      <button onClick={handleClick}>Добавить задачу</button>
    </>
  );
};

export default InputTask;
