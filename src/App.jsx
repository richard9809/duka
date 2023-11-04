import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-white">
      <Navbar />
    </div>
  );
}

export default App;
