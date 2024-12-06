import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import HealthTracker from "./components/HealthTracker";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        < Route path="/login" element= {<Login/>} />
        <Route path="/health-tracker" element={<HealthTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
