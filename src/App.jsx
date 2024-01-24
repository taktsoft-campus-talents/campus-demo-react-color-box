import "./App.css";
import { ColorBox } from "./components/ColorBox";
import { useState } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState("green");

  console.log(
    "App has been rendered with state: selectedColor=",
    selectedColor
  );

  function handleColorButtonClick(color) {
    setSelectedColor(color);
  }
  return (
    <>
      <h1 style={{ color: selectedColor }}>Welcome to React State</h1>
      <p>Die selectedColor ist jetzt: {selectedColor}</p>
      <ColorBox color={selectedColor} label="Colorbox 1" />
      <ColorBox color={selectedColor} label="Colorbox 2" />
      <button
        onClick={() => {
          handleColorButtonClick("blue");
        }}
      >
        Change to blue
      </button>
      <button
        onClick={() => {
          handleColorButtonClick("red");
        }}
      >
        Change to red
      </button>
    </>
  );
}

export default App;
