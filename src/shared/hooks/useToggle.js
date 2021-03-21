import { useReducer } from "react";

export default function useToggle(initial = false) {
  return useReducer((state) => !state, initial);
}
