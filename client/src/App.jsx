import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import ResetPasswrod from "./pages/ResetPasswrod.jsx";
import EmailVerify from "./pages/EmailVerify.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswrod />} />
        <Route path="/email-verify" element={<EmailVerify />} />
      </Routes>
    </div>
  );
};

export default App;
