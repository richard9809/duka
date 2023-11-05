import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Jewellery from "./pages/Jewellery";
import Men from "./pages/Men";
import Women from "./pages/Women";

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-white">
      <Navbar />
      <div className="h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
