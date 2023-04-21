import React from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import "../CSS files/JobPosting.css";

export default function JobPosting() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  };
  const form_style = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <Navigation_Bar />
      <div style={style} className="Job-post">
        <h1>Post A Job</h1>
        <form style={form_style} action="none">
          <input type="text" placeholder="Job Title" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Job Type" />
          <div className="message">
            <input type="text" placeholder="Skills Required" />
            <input type="text" placeholder="Job Description" />
          </div>
          <input type="text" placeholder="Salary" />
          <input type="text" placeholder="Experience" />
          <input type="text" placeholder="Contact Number" />
          <input type="text" placeholder="Email" />
          <button type="submit">Post</button>
        </form>
      </div>
      =
    </div>
  );
}
