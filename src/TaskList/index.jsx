const TaskList = ({ tasks, checkedStatus, deleteTask }) => {
  return (
    <>
      {tasks.map((item) => (
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
      ))}
    </>
  );
};

export default TaskList;
