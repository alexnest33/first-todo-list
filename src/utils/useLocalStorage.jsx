const useLocalStorage = (key, defaultValue) => {
  const getItem = () => {
    try {
      if (localStorage.getItem(key) === "undefined") {
        return [];
      } else {
        return JSON.parse(localStorage.getItem(key));
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  const setItem = (data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error?.message);
    }
  };

  return { getItem, setItem };
};

export default useLocalStorage;
