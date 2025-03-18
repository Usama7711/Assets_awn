import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Requests from "./pages/requests/Requests";
import Assets from "./pages/assets/Assets"; // Importing Assets component
import "./styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <SideBar />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/assets" element={<Assets />} /> 
      </Routes>
    </>
  );
}

export default App;