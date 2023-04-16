import React from "react";
import "../CSS files/Register.css";
import Navigation_Bar from "../Components/Navigation_Bar";

export default function Register() {
  return (
    <div>
      <div className="layout">
        <Navigation_Bar
        name="Login"
        />
        <div className="Register_page">
          <h1>Sign Up</h1>
          <form action="none">
            <div className="input">
              <input type="text" placeholder="Full Name"></input>
              <input type="email" placeholder=" Email"></input>
            </div>
            <div className="input">
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Re-enter Password"></input>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
