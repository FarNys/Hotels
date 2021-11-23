import React, { useState } from "react";
import "../Styles/ConnectPage.css";
import { FaUserEdit } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
const ConnectPage = () => {
  const [index, setindex] = useState(0);
  const [comp, setcomp] = useState([<SignIn />, <SignUp />]);
  console.log(index[0]);
  return (
    <div className="connect_page_container">
      <div className="form_container">
        <div className="choose_container">
          <div className="choose_signIn" onClick={() => setindex(0)}>
            {" "}
            <h4>Sign In</h4>{" "}
          </div>
          <div className="choose_signUp" onClick={() => setindex(1)}>
            <h4>Sign Up</h4>
          </div>
        </div>

        {comp[index]}
      </div>
    </div>
  );
};

export default ConnectPage;
