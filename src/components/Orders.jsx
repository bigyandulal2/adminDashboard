import React from "react";
import "../css/Orders.css";
import { MdBorderColor } from "react-icons/md";
const orders = [
  {
    id: "ORD001",
    customer: "Nirmala Bohora",
    date: "2025-06-28",
    amount: "$450",
    status: "Delivered",
  },
  {
    id: "ORD002",
    customer: "Bigyan Dulal",
    date: "2025-06-27",
    amount: "$300",
    status: "Pending",
  },
  {
    id: "ORD003",
    customer: "Sujan Sharma",
    date: "2025-06-26",
    amount: "$1200",
    status: "Cancelled",
  },
  {
    id: "ORD004",
    customer: "Sita Tamang",
    date: "2025-06-25",
    amount: "$800",
    status: "Delivered",
  },
];

export default function Orders() {
  return (
    <div className="orders-container">
      <h2 className="orders-title">
        <MdBorderColor /> All Orders
      </h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
