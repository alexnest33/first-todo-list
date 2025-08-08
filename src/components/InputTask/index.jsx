import { useState } from "react";
import { Button, Flex } from "antd";
import { Input } from "antd";

const InputTask = ({ dispatch }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text.trim() === "") {
      setError("Нелья добавить пустую задачу");
    } else {
      dispatch({
        type: "add",
        payload: { id: crypto.randomUUID(), task: text, isDone: false },
      });
      setError("");
      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <div className="inputbutton">
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Введите текст задачи..."
        />
        {error}
        <Flex gap="small" wrap>
          <Button
            color="cyan"
            variant="solid"
            type="primary"
            onClick={handleClick}
          >
            Добавить задачу
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default InputTask;
