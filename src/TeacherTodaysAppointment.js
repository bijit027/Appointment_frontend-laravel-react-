import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import TeacherHeader from "./TeacherHeader";
import { useNavigate } from "react-router-dom";

function TeacherTodaysAppointment() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.log("result", user.id);

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    appointmentRequestList();
  }, []);

  async function appointmentRequestList() {
    let id = user.id;

    let item = { id };
    console.warn(item);

    let result = await fetch(
      "http://localhost:8000/api/todaysAppointmentTeacher",
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

    let week = await fetch("http://localhost:8000/api/weekAppointmentTeacher", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    week = await week.json();
    console.warn("result", week);
    setNewData(week);
    console.warn("result", data);
  }

  return (
    <div>
      <TeacherHeader />
      <h1>Todays Appointment</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Student Name</td>
            <td>Department</td>

            <td>Date</td>
            <td>Time from</td>
            <td>Time to</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.student_name}</td>
              <td>{item.department}</td>

              <td>{item.day}</td>
              <td>{item.time_from}</td>
              <td>{item.time_to}</td>
            </tr>
          ))}
        </Table>
      </div>

      <h1>This Week Appointment</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Student Name</td>
            <td>Department</td>

            <td>Date</td>
            <td>Time from</td>
            <td>Time to</td>
          </tr>
          {newData.map((items) => (
            <tr>
              <td>{items.student_name}</td>
              <td>{items.department}</td>

              <td>{items.day}</td>
              <td>{items.time_from}</td>
              <td>{items.time_to}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default TeacherTodaysAppointment;
