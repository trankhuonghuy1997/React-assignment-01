import React from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Save time, save money!</h1>
        <p>Sign up and we'll send the best deal to you</p>
        <form action="">
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subcribe</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
