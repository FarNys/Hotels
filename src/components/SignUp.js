import React from "react";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import "../Styles/ConnectPage.css";

const SignUp = () => {
  return (
    <div className="signIn_form">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="email">
          <GrMail className="icon_for_label" /> Email
        </label>
        <input type="email" name="email" required />
        <label htmlFor="password">
          <RiLockPasswordFill className="icon_for_label" /> Password
        </label>
        <input type="password" name="password" required />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
