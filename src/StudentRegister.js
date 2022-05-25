import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function StudentRegister() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [student_id, setStudent_id] = useState("");

  const navigate = useNavigate();

  async function signUp() {
    let status = 0;
    let item = { name, password, email, department, student_id, status };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/studentRegister", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    if (result == "1") {
      alert("Wait Untill Adimn Accept your Request ");
      window.location.reload();
    } else {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/studentPage");
    }
  }
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />
        <br />
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="form-control"
          placeholder="department"
        />
        <br />
        <input
          type="text"
          value={student_id}
          onChange={(e) => setStudent_id(e.target.value)}
          className="form-control"
          placeholder="student ID"
        />
        <br />
        <button onClick={signUp} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default StudentRegister;
