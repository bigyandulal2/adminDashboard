import React from "react";
import "../css/Navbar.css";
import Dashboard from "./Dashboard";
import { CiBellOn } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
export default function Navbar({ dashboard, setDashboard }) {
  console.log(dashboard);
  return (
    <div className="acee-navbar">
      <h2>HamroLuga</h2>
      <nav className="navbar-items">
        <p onClick={() => setDashboard((e) => !e)}>
          <strong className="navbar-dashboard">
            <span>{dashboard ? <IoIosMenu /> : <ImCross />}</span>
            Dashboard
          </strong>
        </p>
        <ul className="navbar-items-item">
          <li className="navbar-search">
            <input type="text" placeholder="search" />
          </li>
          <li className="navbar-notification">
            <CiBellOn />
          </li>
          <li className="navbar-profile">
            <CgProfile />
          </li>
        </ul>
      </nav>
    </div>
  );
}
