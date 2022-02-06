import { useState } from "react";

export default function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);
  const increament = () => {
    return setValue(value + 1);
  };
  const decrement = () => {
    if (value > 0) {
      return setValue(value - 1);
    }
  };
  const reset = () => {
    return setValue(initialValue);
  };
  return [value, increament, decrement, reset];
}
