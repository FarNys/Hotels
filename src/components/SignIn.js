import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import "../Styles/ConnectPage.css";

const SignIn = () => {
  return (
    <div className="signIn_form">
      <h2>Sign In</h2>
      <form>
        <label htmlFor="name">
          <FaUserEdit className="icon_for_label" /> Name
        </label>
        <input type="text" name="name" required />
        <label htmlFor="email">
          <GrMail className="icon_for_label" /> Email
        </label>
        <input type="email" name="email" required />
        <label htmlFor="password">
          <RiLockPasswordFill className="icon_for_label" /> Password
        </label>
        <input type="password" name="password" required />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
