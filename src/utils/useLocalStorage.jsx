const useLocalStorage = (key, defaultValue) => {
  const getItem = (data) => {
    try {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(data));
      }
      return localStorage.getItem(key);
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
