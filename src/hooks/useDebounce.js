import { useState } from "react";

export default function useDebounce() {
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const debounce = (func, delay) => {
    clearTimeout(debounceTimeout);
    const timeout = setTimeout(() => {
      func();
    }, delay);
    setDebounceTimeout(timeout);
  };

  return debounce;
}
