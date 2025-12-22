import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ResetPasswrod from "./pages/ResetPasswrod";
import EmailVerify from "./pages/EmailVerify";

const App = () => {
  return (
    <div>
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
