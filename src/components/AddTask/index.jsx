import { useState } from "react";

const AddTask = ({ setText,text,setTasks }) => {
  

  const addTask = async () => {
    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/todos",
        {
          method: "POST",
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
      setTasks((prevState) => [...prevState, data]);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
     handleClick()
  };
}

  const handleClick = () => {
    addTask();
    setText("");
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={text}
        placeholder="Введите таску"
      />
      <button onClick={handleClick}>Добавить задучу</button>
    </>
  );
};

export default AddTask;
