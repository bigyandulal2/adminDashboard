import React from "react";
import "../css/Customers.css";
import { IoManSharp } from "react-icons/io5";
const customers = [
  {
    id: "C001",
    name: "Nirmala Bohora",
    email: "nirmala@gmail.com",
    phone: "9801234567",
    orders: 5,
    status: "Active",
  },
  {
    id: "C002",
    name: "Bigyan Dulal",
    email: "bigyan@email.com",
    phone: "9825335201",
    orders: 12,
    status: "Active",
  },
  {
    id: "C003",
    name: "Sujan Sharma",
    email: "sujan@abc.com",
    phone: "9812345678",
    orders: 0,
    status: "Inactive",
  },
  {
    id: "C004",
    name: "Sita Tamang",
    email: "sita@gmail.com",
    phone: "9845678901",
    orders: 2,
    status: "Active",
  },
];

export default function Customers() {
  return (
    <div className="customers-container">
      <h2 className="customers-title">
        <IoManSharp /> Customer List
      </h2>
      <table className="customers-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Total Orders</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.orders}</td>
              <td>
                <span className={`status ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
