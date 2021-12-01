// Increment Action
export const incrementAction = () => {
  return {
    type: "INCREMENT",
    payload: 2,
  };
};

// Decrement Action
export const decrementAction = () => {
  return {
    type: "DECREMENT",
    payload: 1,
  };
};