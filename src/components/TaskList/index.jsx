import TaskItems from "../TaskItems";

const TaskList = ({ tasks, dispatch }) => {
  const deleteTask = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const checkedStatus = (id) => {
    dispatch({ type: "isDone", payload: id });
  };

  return (
    <TaskItems
      deleteTask={deleteTask}
      checkedStatus={checkedStatus}
      tasks={tasks}
      dispatch={dispatch}
    />
  );
};

export default TaskList;
