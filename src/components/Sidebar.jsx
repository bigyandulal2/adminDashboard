import React from "react";
import { FaPlus } from "react-icons/fa";
import "../css/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import SidebarSmall from "./SidebarSmall";
export default function Sidebar({ dashboard }) {
  const navigate = useNavigate();
  return (
    <>
      {!dashboard ? (
        <>
          <h2>SIDEBAR</h2>
          <ul className="sidebar-items">
            <li onClick={() => navigate("/dashboard")}>
              <FaPlus /> <span>dashboard</span>
            </li>
            <li onClick={() => navigate("/orders")}>
              <FaPlus />
              <span>Orders</span>
            </li>
            <li onClick={() => navigate("/products")}>
              <FaPlus />
              <span>products</span>
            </li>
            <li onClick={() => navigate("/customers")}>
              <FaPlus />
              <span>customers</span>
            </li>
          </ul>
        </>
      ) : (
        <SidebarSmall />
      )}
    </>
  );
}
