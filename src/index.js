import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import {useInput, useLocalStorage} from "./utils/input";

function App(props) {
  // const [breed, setBreed] = useInput("husky");
  const [breed, setBreed] = useLocalStorage("breed""husky");
  // const [breed, setBreed] = useState("husky");
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
    fetchDogImages();
  }, [breed]);

  const handleChange = e => {
    setBreed(e.target.value);
  };

  // extract this function from lifecycle event since it's used multiple times
  const fetchDogImages = () => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        setImages(res.data.message);
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  return (
    <>
      <h1>The Dog Website</h1>

      <select value={breed} onChange={handleChange}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
        <option value="boxer">Boxer</option>
      </select>

      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Dog" />
        ))}
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
