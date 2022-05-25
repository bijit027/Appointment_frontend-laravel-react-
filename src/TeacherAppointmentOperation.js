import TeacherHeader from "./TeacherHeader";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TeacherAppointmentOperation() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const [data, setData] = useState([]);
  useEffect(() => {
    appointmentRequestList();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch(
      "http://localhost:8000/api/deleteAppointment/" + id,
      {
        method: "DELETE",
      }
    );

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

    let result = await fetch(
      "http://localhost:8000/api/teacherAppointmentOperation",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    console.warn("result", result);
    setData(result);
    console.warn("result", data);
  }

  return (
    <div>
      <TeacherHeader />
      <h1>Product Listing</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Date</td>
            <td>Time From</td>
            <td>Tiem To</td>

            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.day}</td>
              <td>{item.time_from}</td>
              <td>{item.time_to}</td>

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
                <Link to={"/updateAppointment/" + item.id}>
                  <span className="update">Update</span>
                </Link>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default TeacherAppointmentOperation;
