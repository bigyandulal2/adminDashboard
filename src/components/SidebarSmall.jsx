import React from "react";
import { FaPlus } from "react-icons/fa";
import "../css/SidebarSmall.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { IoManSharp } from "react-icons/io5";
export default function SidebarSmall() {
  const navigate = useNavigate();
  return (
    <>
      {
        <>
          <h2 style={{ fontSize: "14px" }}>SIDEBAR</h2>
          <ul className="sidebar-items">
            <li onClick={() => navigate("/dashboard")}>
              <span>
                <MdOutlineDashboard />
              </span>
            </li>
            <li onClick={() => navigate("/orders")}>
              <span>
                <MdBorderColor />
              </span>
            </li>
            <li onClick={() => navigate("/products")}>
              <span>
                <MdInventory />
              </span>
            </li>
            <li onClick={() => navigate("/customers")}>
              <span>
                <IoManSharp />
              </span>
            </li>
          </ul>
        </>
      }
    </>
  );
}
