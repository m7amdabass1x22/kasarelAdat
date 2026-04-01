import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import Newacount from "./Newacount";
import Tasklist from "./Tasklist";
import Dashbourd from "./Dashbourd";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/Newacount" element={<Newacount />} />
          <Route path="/Tasklist" element={<Tasklist />} />
          <Route path="/Dashbourd" element={<Dashbourd />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
