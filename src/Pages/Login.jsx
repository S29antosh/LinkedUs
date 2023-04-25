import React from "react";
import { useState } from "react";
import Navigation_Bar from "../Components/Navigation_Bar";
import AnimatedPage from "../Animation";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../CSS files/Login.css";

// Stores the user data
var User = {
  email: "",
  password: "",
};

// Function to submit the form
const submit = (e) => {
  e.preventDefault();
  User.email = e.target.email.value;
  User.password = e.target.password.value;
  console.log(User);
};

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  //  Redirects to the homepage if the user is admin
  const NextPage = () => {
    if (User.email === "admin@123" && User.password === "admin123")
      navigate("/Homepage");
  };
  return (
    <AnimatedPage>
      <div className="layout">
        <Navigation_Bar />
        <main>
          <div className="main-content">
            <div className="right-section">
              {/* random image from unsplash */}
              <img src="public\Images\Scene - 1.png" alt="random" />
            </div>
            <div className="left-section">
              <h1>Sign In</h1>
              <form action="none" onSubmit={submit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />

                <input
                  type="password"
                  id="pass"
                  name="password"
                  minLength="8"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className="forget-password">
                  <a href="/Forget">Forget Password</a>{" "}
                </div>
                <button type="submit" onClick={NextPage}>
                  Login
                </button>
              </form>

              <p>
                New?{" "}
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "rgba(89, 86, 233, 1)",
                  }}
                  to="/Register"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
}
