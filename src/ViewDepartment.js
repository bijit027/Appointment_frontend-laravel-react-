import StudentHeader from "./StudentHeader";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ViewDepartment() {
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
    let result = await fetch("http://localhost:8000/api/viewDepartment");
    result = await result.json();
    setData(result);
    console.warn("result", data);
  }

  return (
    <div>
      <StudentHeader />
      <h1>Subject Name</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr></tr>
          {data.map((item) => (
            <tr>
              <td>
                <Link to={"/viewSubject/" + item.department}>
                  <span className="update">
                    <td>{item.department}</td>
                  </span>
                </Link>
                <br />
                <br />
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ViewDepartment;
