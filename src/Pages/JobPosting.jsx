import React from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import "../CSS files/JobPosting.css";
import Axios from "axios";

export default function JobPosting() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const postData = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:5000/addJobs", {
      title: title,
      content: content,
    }).then((response) => {
      alert("Job Posted");
    });
  };

  return (
    <div>
      <Navigation_Bar name="Jobs" />

      <h1 style={{ textAlign: "center" }}>Post a Job</h1>

      <div className="job-posting-form">
        <form>
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type="description"
            placeholder="Job Description"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button onClick={postData}>Create</button>
        </form>
      </div>
    </div>
  );
}
