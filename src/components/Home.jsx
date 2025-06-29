import React, { useState } from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import Main from "./Main";
export default function Home() {
  const [dashboard, setDashboard] = useState(false);
  return (
    <div className="acee-parent">
      <Navbar dashboard={dashboard} setDashboard={setDashboard} />
      <Main dashboard={dashboard} />
    </div>
  );
}
