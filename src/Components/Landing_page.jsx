import React from "react";

export default function Landing_page() {
  return (
    <div className="layout">
      <header>
        <div className="navbar">
          <div className="logo">
            <h1>linkedUs</h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="./">Login</a>{" "}
              </li>
              <li>
                <a href="./">Contact</a>{" "}
              </li>
              <li>
                <a href="./">About Us</a>{" "}
              </li>
            </ul>

            <svg
              width="42"
              height="35"
              viewBox="0 0 42 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 34.6023H21V28.8352H42V34.6023ZM42 20.1847H0V14.4176H42V20.1847ZM42 5.76705H0V0H42V5.76705Z"
                fill="#414141"
              />
            </svg>
          </div>
        </div>
      </header>
      <main>
        <div className="main-content">
          <div className="left-section">
            <h1>Get Job And Internship With Just One Click</h1>
            <p>
              The jobs and internship opportunity of your field of interest in
              your fingertips.
            </p>
            <div className="button">
              
              <button>Lets Begin</button>
            </div>
          </div>
          <div className="right-section">
            {/* random image from unsplash */}
            <img
              src="https://source.unsplash.com/random/400x400"
              alt="random image"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
