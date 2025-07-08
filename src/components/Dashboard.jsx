import React from "react";
import "../css/Dashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { MdAttachMoney } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
const summaryData = [
  { title: "Orders", icon: <FaBasketShopping />, value: "1234" },
  { title: "Customers", icon: <RxPerson />, value: "530" },
  { title: "Revenue", icon: <MdAttachMoney />, value: "$12,500" },
  { title: "Products", icon: <MdLocalGroceryStore />, value: "45" },
];

const barData = [
  { month: "Jan", sales: 2400 },
  { month: "Feb", sales: 1398 },
  { month: "Mar", sales: 9800 },
  { month: "Apr", sales: 3908 },
  { month: "May", sales: 4800 },
  { month: "Jun", sales: 3800 },
];

const pieData = [
  { name: "Men", value: 400 },
  { name: "Women", value: 300 },
  { name: "Kids", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const orders = [
  {
    id: "00123",
    customer: "Bigyan",
    date: "Jun 25",
    amount: "$250",
    status: "Delivered",
  },
  {
    id: "00124",
    customer: "sujan",
    date: "Jun 25",
    amount: "$400",
    status: "Pending",
  },
  {
    id: "00125",
    customer: "sita",
    date: "Jun 26",
    amount: "$600",
    status: "Delivered",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        {" "}
        <MdOutlineDashboard />
        Dashboard
      </h2>

      <div className="summary-cards">
        {summaryData.map((item, idx) => (
          <div className="summary-card" key={idx}>
            <div className="summary-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="charts-container">
        <div className="chart-box">
          <h3>Monthly Sales</h3>
          <BarChart width={300} height={200} data={barData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="chart-box">
          <h3>Category Distribution</h3>
          <PieChart width={300} height={200}>
            <Pie
              data={pieData}
              cx={150}
              cy={100}
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table">
        <h3>Recent Orders</h3>
        <table>
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
    </div>
  );
}
