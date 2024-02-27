import "./styles.css";
import { useState } from "react";
export default function RandomColour() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [colour, setColour] = useState("#000000");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColour() {
    //#123456
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";
    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }
    console.log(hexColour);
    setColour(hexColour);
  }

  function handleCreateRandomRGBColour() {
    const r = randomColourUtility(256);
    const g = randomColourUtility(256);
    const b = randomColourUtility(256);
    setColour(`rgb(${r},${g},${b})`);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: colour }}>
      <button onClick={() => setTypeOfColour("hex")}>Create HEX Colour</button>
      <button onClick={() => setColour("rgb")}>Create RGB Colour</button>
      <button
        onClick={
          typeOfColour === "hex"
            ? handleCreateRandomHexColour
            : handleCreateRandomRGBColour
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: flex,
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
        }}
      ></div>
    </div>
  );
}
