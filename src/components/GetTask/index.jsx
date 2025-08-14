import { useEffect } from "react";

const GetTask = () => {
  const userTask = async (token) => {
    const { getItem, setItem } = useLocalStorage("token");

    try {
      const response = await fetch(
        "https://todo-redev.herokuapp.com/api/todos?isCompleted=false",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${response.status}, ${response.text}`);
      }
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return <></>;
};

export default GetTask;
