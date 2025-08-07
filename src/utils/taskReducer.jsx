export const taskReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add":
      const newArr = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newArr));
      return newArr;
    case "delete":
      const newArr2 = [...state.filter((item) => item.id !== action.payload)];
      localStorage.setItem("tasks", JSON.stringify(newArr2));
      return newArr2;
    case "isDone":
      const newArr3 = [
        ...state.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      ];
      localStorage.setItem("tasks", JSON.stringify(newArr3));
      return newArr3;
    case "clearDone":
      const newArr4 = [...state.filter((item) => !item.isDone)];
      localStorage.setItem("tasks", JSON.stringify(newArr4));
      return newArr4;
    case "initial":
      console.log(state);
      return [...action.payload];

    default:
      return state;
  }
};
