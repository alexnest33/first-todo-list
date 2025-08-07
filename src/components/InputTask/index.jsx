const InputTask = ({ text, setText, error, setError, handleClick }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите текст задачи..."
      />
      {error}
      <button onClick={handleClick}>Добавить задачу</button>
    </>
  );
};

export default InputTask;
