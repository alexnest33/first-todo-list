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
      return state.filter((item) => item.id !== action.payload);
    case "isDone":
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    case "clearDone":
      return state.filter((item) => !item.isDone);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(functionReducer, tasks);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

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

  const deleteTask = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const checkedStatus = (id) => {
    dispatch({ type: "isDone", payload: id });
  };

  const clear = () => {
    dispatch({ type: "clearDone" });
  };

  const menuOfTask = state.filter((item) => {
    if (filter === "all") return true;
    if (filter === "done") return item.isDone;
    if (filter === "active") return !item.isDone;
  });

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

      {menuOfTask.map((item) => {
        return (
          <div key={item.id}>
            <li className={item.isDone ? "active" : ""}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => checkedStatus(item.id)}
              />
              {item.task}
              <button onClick={() => deleteTask(item.id)}>x</button>
            </li>
          </div>
        );
      })}
      <div>
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("active")}>Активные</button>
        <button onClick={() => setFilter("done")}>Завершенные</button>
      </div>
      <div>
        <button onClick={clear}>Очистить выполненные</button>
      </div>
    </>
  );
}

export default App;
