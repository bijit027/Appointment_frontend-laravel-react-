import StudentHeader from "./StudentHeader";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ViewSubject() {
  const params = useParams();
  console.log(params.department);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });

    result = result.json();
    console.warn(result);
    fetchData();
  }
  async function fetchData() {
    let result = await fetch(
      "http://localhost:8000/api/viewSubject/" + params.department
    );
    result = await result.json();
    setData(result);
    console.warn("result", data);
  }

  return (
    <div>
      <StudentHeader />
      <h1>Subject</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Subject Name</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>
                <Link to={"/viewTeacher/" + item.subject}>
                  <span className="update">
                    <td>{item.subject}</td>
                  </span>
                </Link>
                <br />
                <br />
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ViewSubject;
