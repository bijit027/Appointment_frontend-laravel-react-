import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import { useNavigate } from "react-router-dom";

function AppointmentStatus() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.log("result", user.id);

  const [data, setData] = useState([]);
  useEffect(() => {
    appointmentRequestList();
  }, []);

  async function appointmentRequestList() {
    let id = user.id;

    let item = { id };
    console.warn(item);

    let result = await fetch(
      "http://localhost:8000/api/showApppintmentStatus",
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

  async function changeStatus(id, number) {
    let item = { id, number };
    let result = await fetch("http://localhost:8000/api/changeStatus", {
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
      <StudentHeader />
      <h1>Appointment Request</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Teacher Name</td>

            <td>Date</td>
            <td>Time from</td>
            <td>Time to</td>
            <td>Status</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.teacher_name}</td>

              <td>{item.day}</td>
              <td>{item.time_from}</td>
              <td>{item.time_to}</td>
              {item.status == 0 && (
                <td>
                  <div className="booked">
                    <span className="booked">Panding</span>
                  </div>
                </td>
              )}
              {item.status == 1 && (
                <td>
                  <div className="take">
                    <span className="take">Accepted</span>
                  </div>
                </td>
              )}
              {item.status == 2 && (
                <td>
                  <div className="rejected">
                    <span className="rejected">Rejected</span>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default AppointmentStatus;
