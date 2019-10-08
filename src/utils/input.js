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

//new custom hook for storing in localstorage
//1st it'll need a key and value e.g. (key, intitialValue)
//then we'll need to return an array with a value and a setter function e.g. [value, setterFunction]
//our values and setter will come from... our input hook
//local storage will be a side effect of this hook
//
export function useLocalStorage(key, initialValue){
  // const [value, setValue] = useInput(initialValue)
  // return[value, setterFunction]

  //initialValue can be a primitive type or a callback function
  //if a callback function, whatever gets returned is the initial value
  const [value, setValue] = useInput(() => {
    return window.localStorage.getItem(key) || initialValue;
  })

  const customSetter = (newValue) => {
    setValue(newValue)
    window.localStorage.setItem(key, newValue)
  }
  return[value, setValue]
}