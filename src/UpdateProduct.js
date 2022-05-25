import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateStudent(props) {
  const params = useParams();

  console.log(params.id);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      let result = await fetch(
        "http://localhost:8000/api/product/" + params.id
      );
      result = await result.json();
      console.warn(result);
      setData(result);
    }
    fetchApi();
  });
  return (
    <>
      <Header />
      <div>
        <h1>Update Product</h1>
        <input type="text" defaultValue={data.name} />
        <br />
        <br />
        <input type="text" defaultValue={data.price} />
        <br />
        <br />
        <input type="text" defaultValue={data.description} />
        <br />
        <br />
        <input type="file" defaultValue={data.file_path} />
        <br />
        <br />
        <img
          style={{ width: 100 }}
          src={"http://localhost:8000/" + data.file_path}
        />
        <button>Update Product</button>
      </div>
    </>
  );
}

export default UpdateStudent;
