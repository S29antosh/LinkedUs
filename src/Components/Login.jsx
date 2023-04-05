import React from "react";
import Navigation_Bar from "./Navigation_Bar";

export default function Login() {
  return (
    <div className="layout">
      <Navigation_Bar />
      <main>
        <div className="main-content">
          <div className="right-section">
            {/* random image from unsplash */}
            <img
              src="https://source.unsplash.com/random/400x400"
              alt="random image"
            />
          </div>
          <div className="left-section">
            <h1>Sign In</h1>
            <form action="none">
                
                    
                    <input type="email" name="email" id="email"  placeholder="Username"/>
                
                    
                    <input type="password" name="password" id="password" placeholder="Password"/>
                
                <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
