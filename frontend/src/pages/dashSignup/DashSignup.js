import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/welcome/Welcome";
import axios from "axios";
import "./dashSignup.css";

const DashSignup = () => {
  const navgrt = useNavigate();
  const [userReg, setUserReg] = useState({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [er, setEr] = useState("");
 

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserReg({ ...userReg, [name]: value });
  };
  
  const PostDat = async (e) => {
    try {
      e.preventDefault();

      await axios
        .post("http://localhost:3001/signup", {
          userName: userReg.userName,
          email: userReg.email,
          password: userReg.password,
          cpassword: userReg.cpassword,
        })
        .then(() => {
          navgrt("../pages/marketIn/MarketIn");
          alert("user created");
        });
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        console.log(err);
        console.log(er);

        setEr(err.response.data.message);
        
      }
    }
  };
  return (
    <div className="dashup">
      <Welcome />

      <div className="signupForm">
        <form method="post" onSubmit={PostDat}>
          <h2>Create your account</h2>
          {er && (
            <div
              className="er
Color"
            >
              {er}
            </div>
          )}
          <input
            type="text"
            name="userName"
            value={userReg.userName}
            onChange={(e) => handleInput(e)}
            placeholder="User Name"
          ></input>
          <input
            type="text"
            name="email"
            value={userReg.email}
            onChange={(e) => handleInput(e)}
            placeholder="Email Address"
          ></input>
          <br />
          <input
            type="password"
            name="password"
            value={userReg.password}
            onChange={(e) => handleInput(e)}
            placeholder="Password"
          ></input>
          <br />
          <input
            type="password"
            name="cpassword"
            value={userReg.cpassword}
            onChange={(e) => handleInput(e)}
            placeholder="Confirm Password"
          ></input>
          <br />
          <input type="submit" name="Signup" value="Signup"></input>
        </form>
      </div>
    </div>
  );
};

export default DashSignup;
