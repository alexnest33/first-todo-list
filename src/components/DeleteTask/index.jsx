import GetTask from "../GetTask";
const DeleteTask = ({ tasks, setTasks }) => {
  const { id } = tasks;

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(tasks);
      console.log(data);
      setTasks((prevState) => [...prevState.filter((item) => item.id !== id)]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <GetTask tasks={tasks} handleDelete={handleDelete} />
    </>
  );
};

export default DeleteTask;
