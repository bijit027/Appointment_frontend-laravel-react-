import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";

function RequsetStudentRegistration() {
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

    let result = await fetch("http://localhost:8000/api/studentRequestList");
    result = await result.json();
    setData(result);
    console.warn("result", data);
  }

  async function changeStatus(id, status) {
    let item = { id, status };

    let result = await fetch("http://localhost:8000/api/changeStatusStudent", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    console.warn("result", result);
    if (result) {
      window.location.reload();
    } else {
    }
  }

  return (
    <div>
      <AdminHeader />
      <h1>Student Request</h1>
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
                <div className="take">
                  <span
                    onClick={() => changeStatus(item.id, 1)}
                    className="take"
                  >
                    Accept
                  </span>
                </div>
              </td>

              <td>
                <div className="delete">
                  <span
                    onClick={() => deleteOperation(item.id)}
                    className="delete"
                  >
                    Reject
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default RequsetStudentRegistration;
