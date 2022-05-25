import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateAppointment(props) {
  const [day, setDay] = useState("");
  const [time_from, setTime_from] = useState("");
  const [time_to, setTime_to] = useState("");
  const params = useParams();

  console.log(params.id);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      let result = await fetch(
        "http://localhost:8000/api/schedule/" + params.id
      );
      result = await result.json();
      console.warn(result);
      setData(result);
      setDay(result.day);
      setTime_from(result.time_from);
      setTime_to(result.time_to);
    }
    fetchApi();
  }, []);
  async function editSchedule(id) {
    /* const formData = new FormData();
    formData.append("day", day);
    formData.append("time_from", time_from);
    formData.append("time_to", time_to);

    let result = await fetch(
      "http://localhost:8000/api/updateSchedule/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    console.warn(result);
    */
    let item = { id, day, time_from, time_to };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/scheduleUpdate", {
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
      <Header />
      <div>
        <h1>Update Schedule</h1>

        <br />

        <p>Date:{data.day}</p>
        <input
          type="date"
          onChange={(e) => setDay(e.target.value)}
          defaultValue={data.day}
        />
        <br />
        <br />
        <p> Time from :{data.time_from}</p>
        <input
          type="time"
          onChange={(e) => setTime_from(e.target.value)}
          defaultValue={data.time_from}
        />
        <br />
        <p> Time to :{data.time_to}</p>
        <input
          type="time"
          onChange={(e) => setTime_to(e.target.value)}
          defaultValue={data.time_to}
        />
        <br />

        <br />

        <button onClick={() => editSchedule(data.id)}>Update Product</button>
      </div>
    </>
  );
}

export default UpdateAppointment;
