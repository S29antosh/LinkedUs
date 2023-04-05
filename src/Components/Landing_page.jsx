import React from "react";
import Navigation_Bar from "./Navigation_Bar";
import { Routes } from "react-router-dom";

export default function Landing_page() {
  return (
    <div className="layout">
      <Navigation_Bar />
      <main>
        <div className="main-content">
          <div className="left-section">
            <h1>Get Job And Internship With Just One Click</h1>
            <p>
              The jobs and internship opportunity of your field of interest in
              your fingertips.
            </p>
            <div className="button">
              
              <a href="./Login.jsx"></a><button>Lets Begin</button>
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
