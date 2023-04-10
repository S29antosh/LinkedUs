import React from "react";
import Navigation_Bar from "./Navigation_Bar";
import { Link } from "react-router-dom";
import AnimatedPage from "../Animation";

export default function Landing_page() {
  return (
    <AnimatedPage>
    <div className="layout">
      <Navigation_Bar
      name="Login"
      />
      <main>
        <div className="main-content">
          <div className="left-section">
            <h1>Get Job And Internship With Just One Click</h1>
            <p>
              The jobs and internship opportunity of your field of interest in
              your fingertips.
            </p>
            <div className="button">
              
              <Link to="/Login"><button>Lets Begin</button></Link>
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
    </AnimatedPage>
  );
}
