import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";
// import axios from "axios";
import { useLocalStorage } from "./utils/input";
import {useDogImages} from "./utils/api";

function App(props) {
  // const [breed, setBreed] = useInput("husky");
  const [breed, setBreed] = useLocalStorage("breed", "husky");
  // const [breed, setBreed] = useState("husky");
  // const [images, setImages] = useState([]);

    const[images] = useDogImages(breed, count)
  //custom hook to count images
  const [count, setCount] = useLocalStorage("count", 1);

  // useEffect(() => {
  //   setImages([]);
  //   // fetchDogImages();
  // }, [breed, count]);

  //
  // const handleChange = e => {
  //   setBreed(e.target.value);
  // };

  // extract this function from lifecycle event since it's used multiple times

  return (
    <>
      <h1>The Dog Website</h1>

      <select value={breed} onChange={e => setBreed(e.target.value)}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
        <option value="boxer">Boxer</option>
      </select>

      <input
        type="number"
        placeholder="Image count"
        value={count}
        onChange={e => setCount(e.target.value)} //
      />
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
