import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Outlet } from "react-router-dom";
import "../css/Main.css";

export default function Main({ dashboard }) {
  return (
    <section className="section-main">
      <div
        className="sidebar-container"
        style={dashboard ? { width: "100px" } : { width: "300px" }}
      >
        <Sidebar dashboard={dashboard} />
      </div>

      <div className="content-container">{<Outlet />}</div>
    </section>
  );
}
