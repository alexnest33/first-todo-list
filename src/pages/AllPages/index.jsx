import { useState, useReducer, useEffect } from "react";
import { taskReducer } from "../../utils/taskReducer";
import InputTask from "../../components/InputTask";
import Header from "../../components/Header";
import TaskList from "../../TaskList";
import FilterButtons from "../../components/FilterButtons";
import ClearDoneTask from "../../ClearDoneTask";

const AllPages = () => {
  const [state, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("all");

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

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("tasks"));
    dispatch({ type: "initial", payload: result });
  }, []);

  return (
    <>
      <Header />
      <InputTask dispatch={dispatch} />
      <TaskList
        tasks={menuOfTask}
        checkedStatus={checkedStatus}
        deleteTask={deleteTask}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <ClearDoneTask clear={clear} state={state} />
    </>
  );
};

export default AllPages;
