import {useState} from "react";

//our first custom hook
export function useInput(initialValue){
  const [value, setValue] = useState(initialValue)

  const customSetter = (newValue) => {
    console.log('New value:', newValue)
    setValue(newValue)
  }

  return[value, customSetter]
}