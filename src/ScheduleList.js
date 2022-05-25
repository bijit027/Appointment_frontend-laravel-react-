import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import { useNavigate } from "react-router-dom";

function ScheduleList() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.log("result", user.id);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function appointmentRequest(id) {
    let user_id = user.id;

    let item = { id, user_id };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/appointmentRequest", {
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
      navigate("/appointmentStatus");
    } else {
    }
  }
  async function fetchData() {
    let result = await fetch("http://localhost:8000/api/scheduleList");
    result = await result.json();
    setData(result);
    console.warn("result", data);
  }

  return (
    <div>
      <StudentHeader />
      <h1>Product Listing</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Name</td>
            <td>Date</td>
            <td>Time from</td>
            <td>Time to</td>
            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.day}</td>
              <td>{item.time_from}</td>
              <td>{item.time_to}</td>
              {item.status == 0 && (
                <td>
                  <div className="take">
                    <span
                      onClick={() => appointmentRequest(item.id)}
                      className="take"
                    >
                      Appointment
                    </span>
                  </div>
                </td>
              )}
              {item.status == 2 && (
                <td>
                  <div className="take">
                    <span
                      onClick={() => appointmentRequest(item.id)}
                      className="take"
                    >
                      Appointment
                    </span>
                  </div>
                </td>
              )}

              {item.status == 1 && (
                <td>
                  <div className="booked">
                    <span className="booked">Booked</span>
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

export default ScheduleList;
