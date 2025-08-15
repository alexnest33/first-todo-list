const GetTask = ({ tasks, handleDelete, updateTask }) => {
  return (
    <>
      {tasks.map((item) => {
        return (
          <div key={item.id}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Удалить ✖</button>
            {/* <button onClick={updateTask}>ss</button> */}
          </div>
        );
      })}
    </>
  );
};

export default GetTask;
