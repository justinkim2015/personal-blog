import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import NewPost from "./NewPost";
import DisplayPost from "./components/DisplayPost";
import EditPost from "./EditPost"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<DisplayPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
