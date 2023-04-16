import React from "react";
import Landing_page from "./Pages/Landing_page";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Eroor from "./Pages/Eroor";



export default function App() {
  return (
    <>
    {/* Routing Using React Router DOM */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Eroor />} />
          {/* <Route path="/Search" element={<Search />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
