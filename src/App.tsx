import "./App.css";
import Navbar from "./components/Navbar";
import ClaimID from "./components/ClaimID";
import Hero from "./components/Hero";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/claim" element={<ClaimID />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
