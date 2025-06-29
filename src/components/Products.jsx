import React from "react";
import "../css/Products.css";
import { MdInventory } from "react-icons/md";
const products = [
  {
    id: "P001",
    name: "Jeans pant",
    category: "Men",
    price: "$75",
    stock: 12,
    status: "Available",
  },
  {
    id: "P002",
    name: "Kurta surwal",
    category: "Women",
    price: "$60",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "P003",
    name: "GoldStar",
    category: "Unisex",
    price: "$90",
    stock: 34,
    status: "Available",
  },
  {
    id: "P004",
    name: "Tshirt",
    category: "Kids",
    price: "$40",
    stock: 5,
    status: "Low Stock",
  },
];

export default function Products() {
  return (
    <div className="products-container">
      <h2 className="products-title">
        <MdInventory /> Product Inventory
      </h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <span
                  className={`status ${product.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
