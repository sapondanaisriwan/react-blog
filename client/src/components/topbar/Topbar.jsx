import { Link } from "react-router-dom";
import "./topbar.css";
export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="topListItem">
            <Link to={"/"}>About</Link>
          </li>
          <li className="topListItem">
            <Link to={"/"}>Contact</Link>
          </li>
          <li className="topListItem">
            <Link to={"/write"}>Write</Link>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://avatars.githubusercontent.com/u/64634605?v=4"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="topListItem">
              <Link to={"/Register"}>Register</Link>
            </li>
          </ul>
        )}

        <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
