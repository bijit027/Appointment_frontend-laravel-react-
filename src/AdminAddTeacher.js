import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AdminAddTeacher() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let status = 1;
    let item = { name, password, email, department, subject, status };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/teacherRegister", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);

    navigate("/AdminPage");
  }
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Add Teacher</h1>

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
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="form-control"
          placeholder="subject"
        />
        <br />
        <button onClick={signUp} className="btn btn-primary">
          Add Teacher
        </button>
      </div>
    </>
  );
}

export default AdminAddTeacher;
