import {useState, useEffect} from "react";
import axios from "axios";

export function useDogImages(breed, count) {
  const [images, setImages] = useState([]);

  // we can define side effects in our custom hooks as well,
  // and subscribe to changes in variables coming from anywhere (like parameters...)
  useEffect(()=> {
    setImages([]);


    axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
    .then(res => {
      setImages(res.data.message);
    })
    .catch(error => {
      console.log("error:", error);
    })
  }, [breed, count])
  return [images, setImages]
}

