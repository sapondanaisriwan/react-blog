import React from "react";
import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Setting from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
function App() {
  return (
    <>
      <Topbar />
      <Register />
    </>
  );
}

export default App;
