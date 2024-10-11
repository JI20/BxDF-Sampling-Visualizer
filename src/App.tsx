import { useState } from "react";
import "./App.css";
import Visualizer from "./components/Visualizer/Visualizer";

function App() {
  return (
    <div className="bg-blue-950 w-screen h-screen flex content-center items-center justify-center">
      <div className="bg-white h-[100vh] w-[100vw]">
        <Visualizer />
      </div>
    </div>
  );
}

export default App;
