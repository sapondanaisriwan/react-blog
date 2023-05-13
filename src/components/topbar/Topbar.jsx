import React from "react";
import "./topbar.css";
export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">LogOut</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://avatars.githubusercontent.com/u/64634605?v=4" alt="" />
        <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
