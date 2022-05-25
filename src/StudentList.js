import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";

function StudentList() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const [data, setData] = useState([]);
  useEffect(() => {
    appointmentRequestList();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/deleteStudent/" + id, {
      method: "DELETE",
    });

    result = result.json();
    console.warn(result);
    if (result) {
      window.location.reload();
    } else {
    }
  }
  async function appointmentRequestList() {
    let id = user.id;

    let item = { id };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/studentList");
    result = await result.json();
    setData(result);
    console.warn("result", data);
  }

  return (
    <div>
      <AdminHeader />
      <h1>Student List </h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Department</td>
            <td>StudentId</td>

            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.department}</td>
              <td>{item.student_id}</td>

              <td>
                <div className="delete">
                  <span
                    onClick={() => deleteOperation(item.id)}
                    className="delete"
                  >
                    Delete
                  </span>
                </div>
              </td>
              <td>
                <div classname="update">
                  <Link to={"/adminUpdateStudent/" + item.id}>
                    <span className="update">
                      <td>Update</td>
                    </span>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default StudentList;
