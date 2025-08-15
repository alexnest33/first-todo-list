import GetTask from "../GetTask";

const ChangeTask = ({ tasks, setText, text }) => {
  const { id } = tasks;

  const updateTask = async () => {
    try {
      const response = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: text,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setText("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <GetTask tasks={tasks} updateTask={updateTask} /> 
    </>
  );
};

export default ChangeTask;
