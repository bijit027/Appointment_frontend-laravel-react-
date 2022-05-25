import TeacherHeader from "./TeacherHeader";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppointmentRequestList() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.log("result", user.id);

  const [data, setData] = useState([]);
  useEffect(() => {
    appointmentRequestList();
  }, []);

  async function appointmentRequestList() {
    let user_id = user.id;

    let item = { user_id };
    console.warn(item);

    let result = await fetch(
      "http://localhost:8000/api/appointmentRequestList",
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

  async function changeStatus(id, number, schedule_id) {
    let item = { id, number, schedule_id };
    let items = { number, schedule_id };
    let result = await fetch("http://localhost:8000/api/changeStatus", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (number == 1) {
      let update = await fetch(
        "http://localhost:8000/api/changeStatusSchedule",
        {
          method: "POST",
          body: JSON.stringify(items),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    }
    result = await result.json();
    console.warn("result", result);
    if (result) {
      window.location.reload();
    } else {
    }
  }

  return (
    <div>
      <TeacherHeader />
      <h1>Appointment Request</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Name</td>
            <td>Department</td>
            <td>Date</td>
            <td>Time from</td>
            <td>Time to</td>
            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.student_name}</td>
              <td>{item.department}</td>
              <td>{item.day}</td>
              <td>{item.time_from}</td>
              <td>{item.time_to}</td>

              <td>
                <div className="take">
                  <span
                    onClick={() => changeStatus(item.id, 1, item.schedule_id)}
                    className="take"
                  >
                    Accept
                  </span>
                </div>
              </td>

              <td>
                <div className="booked">
                  <span
                    onClick={() => changeStatus(item.id, 2, item.schedule_id)}
                    className="booked"
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

export default AppointmentRequestList;
