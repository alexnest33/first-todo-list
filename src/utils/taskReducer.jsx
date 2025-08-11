import useLocalStorage from "./useLocalStorage";

export const taskReducer = (state, action) => {
  console.log(action);
  const { setItem } = useLocalStorage("tasks");
  switch (action.type) {
    case "add":
      const newArr = [...state, action.payload];
      setItem(newArr);
      return newArr;
    case "delete":
      const newArr2 = [...state.filter((item) => item.id !== action.payload)];
      setItem(newArr2);
      return newArr2;
    case "isDone":
      const newArr3 = [
        ...state.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      ];
      setItem(newArr3);
      return newArr3;
    case "clearDone":
      const newArr4 = [...state.filter((item) => !item.isDone)];
      setItem(newArr4);
      return newArr4;
    case "initial":
      console.log(state);
      return [...action.payload];

    default:
      return state;
  }
};
