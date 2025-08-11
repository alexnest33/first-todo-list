import { useState, useReducer, useEffect } from "react";
import { taskReducer } from "../../utils/taskReducer";
import InputTask from "../../components/InputTask";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import FilterButtons from "../../components/FilterButtons";
import ClearDoneTask from "../../components/ClearDoneTask";
import Footer from "../../components/Footer";
import useLocalStorage from "../../utils/useLocalStorage";

const AllPages = () => {
  const [state, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("Все");

  const { getItem, setItem } = useLocalStorage("tasks");

  const menuOfTask = state.filter((item) => {
    if (filter === "Все") return true;
    if (filter === "Завершенные") return item.isDone;
    if (filter === "Выполненные") return !item.isDone;
  });

  useEffect(() => {
    const result = getItem();
    dispatch({ type: "initial", payload: result });
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <InputTask dispatch={dispatch} />
        <TaskList tasks={menuOfTask} dispatch={dispatch} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <div>
          <ClearDoneTask dispatch={dispatch} state={state} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AllPages;
