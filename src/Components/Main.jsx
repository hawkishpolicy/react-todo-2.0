import React from "react";
import { Routes, Route } from "react-router-dom";
import { NoteApp, Register, NavBar } from "./";
import NoteAppProvider from "../Provider/NoteAppProvider";

function Main() {
  return (
    <div>
      <NoteAppProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<NoteApp />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </NoteAppProvider>
    </div>
  );
}

export default Main;