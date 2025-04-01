import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Interview from "./pages/Interview";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

