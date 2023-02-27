import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import NewPost from "./NewPost";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
