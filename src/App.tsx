import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ClaimID from "./components/ClaimID";
import Hero from "./components/Hero";
import { db } from "./utils/db";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
	const [userID, setUserID] = useState("");

	useEffect(() => {
		db("");
	}, []);

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
