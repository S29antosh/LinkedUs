import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navigation_Bar from "../Components/Navigation_Bar";

function Jobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the server
    Axios.get("http://localhost:5000/getData")
      .then((response) => {
        // Set the data state to the response data
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navigation_Bar name="Jobs" />
      <h1 style={{ textAlign: "center" }}>Jobs</h1>
      <div
        className="Jobs"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
            flexWrap: "wrap",
          
          gap: "1rem",
        }}
      >
        {data.map((item) => (
          <div style={{
            border: "1px solid black",
            padding: "1rem",
            borderRadius: "1rem",
            width: "50%",
          }} key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Jobs;
