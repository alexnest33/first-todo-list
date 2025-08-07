const FilterButtons = ({ filter, setFilter }) => {
  return (
    <>
      <p>{filter}</p>
      <button onClick={() => setFilter("all")}>Все</button>
      <button onClick={() => setFilter("active")}>Активные</button>
      <button onClick={() => setFilter("done")}>Завершенные</button>
    </>
  );
};

export default FilterButtons;
