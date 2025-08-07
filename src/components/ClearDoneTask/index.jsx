const ClearDoneTask = ({ state, clear }) => {
    
  return (
    <>
      <button onClick={clear}>Очистить выполненные</button>
      <p>Список оставшихся дел: {state.length}</p>
    </>
  );
};

export default ClearDoneTask;
