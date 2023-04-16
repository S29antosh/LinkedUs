import Navigation_Bar from "../Components/Navigation_Bar";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Navigation_Bar name="Dashboard" />
      <div className="layout">
        <div className="main">
          <h1>Find Your Dream Job</h1>
          <form action="none">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Job Title or Keyword"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
