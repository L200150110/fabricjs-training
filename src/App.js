import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { fabric } from "fabric";

function App() {
  const [canvas, setCanvas] = useState("");

  const initCanvas = () => {
    new fabric.Canvas("canvas", {
      height: 400,
      width: 400,
    });
  };

  useEffect(() => {
    setCanvas(initCanvas());
    fabric.Image.fromURL(
      "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg",
      (img) => {
        canvas.backgroundImage = img;
      }
    );
  }, []);

  return (
    <div>
      <h1>Test fabric canvas</h1>
      <canvas id="canvas" />
    </div>
  );
}

export default App;
