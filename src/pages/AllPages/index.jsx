import AddTask from "../../components/AddTask";
// import ChangeTask from "../../components/ChangeTask";
import DeleteTask from "../../components/DeleteTask";
// import GetTask from "../../components/GetTask";
import { useState, useEffect } from "react";

const AllPages = () => {
  const [tasks, setTasks] = useState([
    {
      id: "",
      title: "",
      isCompleted: "",
      user_id: "",
    },
  ]);
  const [text, setText] = useState("");

  const userTask = async () => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/todos?isCompleted=false",
        {
          method: "GET",
          headers: {
            accept: "application/json",

            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${response.status}, ${response.text}`);
      }
      setTasks(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    userTask();
  }, []);

  return (
    <div className="app">
      <AddTask setTasks={setTasks} text={text} setText={setText } />
      {/* <GetTask tasks={tasks} /> */}
      <DeleteTask tasks={tasks} setTasks={setTasks} />
     {/* <ChangeTask text={text} setText={setText} tasks={tasks}/> */}
    </div>
  );
};

export default AllPages;
