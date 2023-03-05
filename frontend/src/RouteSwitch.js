import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import NewPost from "./new_post/NewPost";
import DisplayPost from "./components/DisplayPost";
import EditPost from "./edit_post/EditPost"
import Login from "./login/Login";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<DisplayPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
