import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />// by default login page
    </Routes>
  );
};

export default App;
