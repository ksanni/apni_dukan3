import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
    const[fullName, SetfullName]=useState("");
    const[email, Setemail]=useState("");
    const[password, Setpassword]=useState("");
    const[errorMsg, SeterrorMsg]=useState("");
    const[successMsg, SetsuccessMsg]=useState("");

    function handleSignup(e){
      e.preventDefault();
      console.log(fullName,email,password)
    }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <br></br>
      <form className="form-group" autoCapitalize="off" onSubmit={handleSignup}>
        <label htmlFor="fname">Full Name :</label>
        <input
          type="text"
          name="fname"
          id="fname"
          className="form-control"
          required
          value={fullName}
          onChange={(e)=>SetfullName(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="email">Email id :</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          required
          value={email}
          onChange={(e)=> Setemail(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="password">Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          required
          value={password}
          onChange={(e)=>Setpassword(e.target.value)}
        />
      <br></br>
      <br></br>
      <div className="btn-box">
        <span>Allready have an account Login </span>
        <Link to="/Login">Here</Link>
        <button type="submit" className="btn btn-success btn-md float-end">
          SIGN UP
        </button>
      </div>
      </form>
    </div>
  );
}

export default Signup;
