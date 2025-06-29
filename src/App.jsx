import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Customers from "./components/Customers";
import Home from "./components/Home";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </>
  );
}
