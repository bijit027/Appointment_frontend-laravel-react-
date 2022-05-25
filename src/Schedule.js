import TeacherHeader from "./TeacherHeader";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Schedule() {
  var params = useParams();

  console.log(params.id);
  let user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user.id);
  console.warn(user.name);
  console.warn(user.email);

  const [day, setDay] = useState("");
  const [time_from, setTime_from] = useState("");
  const [time_to, setTime_to] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
    } else {
      navigate("/add");
    }
  }, []);

  async function schedule() {
    let teacher_id = user.id;
    let subject = user.subject;

    let name = user.name;
    let item = { teacher_id, name, day, subject, time_from, time_to };
    let result = await fetch("http://localhost:8000/api/teacherSchedule", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    //localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/schedule");
    if (result) {
      window.location.reload();
    } else {
    }
  }
  return (
    <>
      <TeacherHeader />
      <div>
        <h1>Create Appointment</h1>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="date"
            value={day}
            placeholder="date"
            onChange={(e) => setDay(e.target.value)}
            className="form-control"
          />
          <br />

          <input
            type="time"
            value={time_from}
            placeholder="time from"
            onChange={(e) => setTime_from(e.target.value)}
            className="form-control"
          />
          <br />
          <input
            type="time"
            value={time_to}
            placeholder="time to"
            onChange={(e) => setTime_to(e.target.value)}
            className="form-control"
          />
          <br />
          <button onClick={schedule} className="btn btn-primary">
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default Schedule;
