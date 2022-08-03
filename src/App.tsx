import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ClaimID from "./components/ClaimID";
import Hero from "./components/Hero";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [userID, setUserID] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Hero userID={userID} setUserID={setUserID} />}
        />
        <Route path="/claim" element={<ClaimID userID={userID} />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
