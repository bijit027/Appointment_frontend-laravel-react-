import StudentHeader from "./StudentHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function StudentUpdate(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [student_id, setSudent_id] = useState("");
  const params = useParams();

  console.log(params.id);
  let user = JSON.parse(localStorage.getItem("user-info"));

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      let result = await fetch(
        "http://localhost:8000/api/getStudent/" + user.id
      );
      result = await result.json();
      console.warn(result);
      setData(result);
      setName(result.name);
      setEmail(result.email);
      setDepartment(result.department);
      setSudent_id(result.student_id);
    }
    fetchApi();
  }, []);
  async function editSchedule(id) {
    let item = { id, name, email, department, student_id };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/studentUpdate", {
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
      alert("Data has been update");
      window.location.reload();
    }
  }
  return (
    <>
      <StudentHeader />
      <div>
        <h1>Update Schedule</h1>

        <br />

        <p>Name</p>
        <input
          type="name"
          onChange={(e) => setName(e.target.value)}
          defaultValue={data.name}
        />
        <br />
        <p>Email</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={data.email}
        />
        <br />
        <p>Department</p>
        <input
          type="Department"
          onChange={(e) => setDepartment(e.target.value)}
          defaultValue={data.department}
        />
        <br />
        <p>Student ID</p>
        <input
          type="department"
          onChange={(e) => setSudent_id(e.target.value)}
          defaultValue={data.student_id}
        />
        <br />

        <br />

        <button onClick={() => editSchedule(data.id)}>Update Profile</button>
      </div>
    </>
  );
}

export default StudentUpdate;
