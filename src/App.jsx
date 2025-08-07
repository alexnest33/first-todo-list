import { useState, useReducer, useEffect } from "react";
import { taskReducer } from "./components/Reducer";
import InputTask from "./components/InputTask";
import Header from "./components/Header";
import TaskList from "./TaskList";
import "./App.css";
import FilterButtons from "./components/FilterButtons";

//  const taskReducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "add":
//       const newArr = [...state, action.payload];
//       localStorage.setItem("tasks", JSON.stringify(newArr));
//       return newArr;
//     case "delete":
//       const newArr2 = [...state.filter((item) => item.id !== action.payload)];
//       localStorage.setItem("tasks", JSON.stringify(newArr2));
//       return newArr2;
//     case "isDone":
//       const newArr3 = [
//         ...state.map((item) =>
//           item.id === action.payload ? { ...item, isDone: !item.isDone } : item
//         ),
//       ];
//       localStorage.setItem("tasks", JSON.stringify(newArr3));
//       return newArr3;
//     case "clearDone":
//       const newArr4 = [...state.filter((item) => !item.isDone)];
//       localStorage.setItem("tasks", JSON.stringify(newArr4));
//       return newArr4;
//     case "initial":
//       console.log(state);
//       return [...action.payload];

//     default:
//       return state;
//   }
// };

function App() {
  const [state, dispatch] = useReducer(taskReducer, []);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleClick();
  //   }
  // };

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
    if (filter === "active") return !item.isDone; ///
  });

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("tasks"));
    dispatch({ type: "initial", payload: result });
  }, []);

  return (
    <>
      <Header />
      <InputTask
        text={text}
        setText={setText}
        error={error}
        setError={setError}
        handleClick={handleClick}
      />
      <TaskList
        tasks={menuOfTask}
        checkedStatus={checkedStatus}
        deleteTask={deleteTask}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите текст задачи..."
      />
      {error}

      <button onClick={handleClick}>Добавить задачу</button> */}

      {/* {menuOfTask.map((item) => {
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
      })} */}
      {/* <div>
        <p>{filter}</p>
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("active")}>Активные</button>
        <button onClick={() => setFilter("done")}>Завершенные</button>
      </div> */}
      <div>
        <button onClick={clear}>Очистить выполненные</button>
        <p>Список оставшихся дел: {state.length}</p>
      </div>
    </>
  );
}

export default App;
