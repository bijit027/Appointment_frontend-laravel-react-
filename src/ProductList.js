import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });

    result = result.json();
    console.warn(result);
    fetchData();
  }
  async function fetchData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
    console.warn("result", data);
  }

  return (
    <div>
      <Header />
      <h1>Welcome To Schedule System</h1>
    </div>
  );
}

export default ProductList;
