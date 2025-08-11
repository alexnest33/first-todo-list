const useLocalStorage = (key, defaultValue) => {
  const getItem = () => {
    return localStorage.getItem(key);
  };

  const setItem = (data) => {
    return localStorage.setItem(key, JSON.stringify(data));
  };

  return { getItem, setItem };
};

export default useLocalStorage;
