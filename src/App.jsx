import { useState, useReducer } from "react";
import "./App.css";

const tasks = [
  { id: 1, task: "Написать Шпору", isDone: true },
  { id: 2, task: "Разобраться в RTK", isDone: false },
  { id: 3, task: "Выучить TypeScript", isDone: false },
];

const functionReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return [...state.slice(0, -1)];
    case "isDone":
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(functionReducer, tasks);
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

  const deleteTask = () => {
    dispatch({ type: "delete" });
  };

  const checkedStatus = (id) => {
    dispatch({ type: "isDone", payload: { isDone: !isDone } });
  };

  return (
    <>
      <h1>Мой To-Do List</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите текст задачи..."
      />
      {error}

      <button onClick={handleClick}>Добавить задачу</button>
      {state.map((item) => {
        return (
          <div key={crypto.randomUUID()}>
            <li>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={checkedStatus(item.id)}
              />
              {item.task}
              <button onClick={deleteTask}>x</button>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default App;
