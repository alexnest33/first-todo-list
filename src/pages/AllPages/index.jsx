import { useState, useReducer, useEffect } from "react";
import { taskReducer } from "../../utils/taskReducer";
import InputTask from "../../components/InputTask";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import FilterButtons from "../../components/FilterButtons";
import ClearDoneTask from "../../components/ClearDoneTask";
import Footer from "../../components/Footer";

const AllPages = () => {
  const [state, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("Все");

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
    if (filter === "Все") return true;
    if (filter === "Завершенные") return item.isDone;
    if (filter === "Выполненные") return !item.isDone;
  });

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("tasks"));
    dispatch({ type: "initial", payload: result });
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <InputTask dispatch={dispatch} />
        <TaskList
          tasks={menuOfTask}
          checkedStatus={checkedStatus}
          deleteTask={deleteTask}
        />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <div>
          <ClearDoneTask clear={clear} state={state} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AllPages;
