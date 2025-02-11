import React, { useState } from "react";
import poster from "./assets/poster.png";
import Signupstyle from "./Styles/Signup.module.css";
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
// impor useState from React

function Signup() {
  const Navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    toc: false,
  });
  const [error, setError] = useState({
    name: false,
    username: false,
    email: false,
    mobile: false,
    toc: false,
  });
  function handleSubmit(e) {
    e.preventDefault();
    setError({
      name: false,
      username: false,
      email: false,
      mobile: false,
      toc: false,
    });
    // localStorage.setItem("formdata", JSON.stringify(formdata))
    if (formdata.name.trim().length === 0) {
      setError((error) => (
        { ...error, name: true }
      ));
    return
    }
    if (formdata.username.trim().length === 0) {
      setError((error) => (
        { ...error, username: true }
      ));
      return
    }
    if (formdata.email.trim().length === 0) {
      setError((error) => (
        { ...error, email: true }
      ));
      return
    }
    if (formdata.mobile.trim().length === 0) {
      setError((error) => (
        { ...error, mobile: true }
      ));
      return
    }
    if (!formdata.toc) {
      setError((error) =>(
        { ...error, toc: true }
      ));
      return
    }
    toast.success('user created successfully')
    localStorage.setItem('user', JSON.stringify(formdata))
    // toast.success('Registered succesfully')
    console.log(formdata);
    Navigate('/genre')
    setFormdata(
      {
        name: "",
        username: "",
        email: "",
        mobile: "",
        toc: false,
        }

      )
    
   
  }
  const newstyle = {
    color: "white",
    marginBottom: "4vh",
    fontFamily: "sans-serif",
    fontWeight: "100",
  };
  return (
    <>
      <div className={Signupstyle.main}>
        <img className={Signupstyle.poster} src={poster} alt="poster" />
        <h1
          style={{
            color: "white",
            position: "absolute",
            bottom: "15vh",
            left: "5vw",
          }}
          className={Signupstyle.hed}
        >
          Discover new things on <br />
          Superapp
        </h1>
        <div className={Signupstyle.signup}>
          <h1 className={Signupstyle.heading}>Sign up</h1>
          <h3 style={newstyle}>Create your new account</h3>
          <div className={Signupstyle.signupform}></div>
          <form onSubmit={handleSubmit}>
            <input
              style={{
                border: error.name
                  ? "1px solid red"
                  : "1px solid rgba(114, 219, 115, 1)",
              }}
              type="text"
              placeholder="Name"
              value={formdata.name}
              onChange={(e) => {
                setFormdata({ ...formdata, name: e.target.value });
              }}
            />
            {error.name && <p style={{ color: 'red' }}>Name is required</p>}
            <input
              style={{
                border: error.username
                  ? "1px solid red"
                  : "1px solid rgba(114, 219, 115, 1)",
              }}
              type="text"
              placeholder="Username"
              value={formdata.username}
              onChange={(e) => {
                setFormdata({ ...formdata, username: e.target.value });
              }}
            />
            {error.username && (
              <p style={{ color: 'red' }}>Username is required</p>
            )}

            <input
              style={{
                border: error.email
                  ? "1px solid red"
                  : "1px solid rgba(114, 219, 115, 1)",
              }}
              type="text"
              placeholder="Email"
              value={formdata.email}
              onChange={(e) => {
                setFormdata({ ...formdata, email: e.target.value });
              }}
            />
            {error.email && <p style={{ color: 'red' }}>Email is required</p>}

            <input
              style={{
                border: error.mobile
                  ? "1px solid red"
                  : "1px solid rgba(114, 219, 115, 1)",
              }}
              type="text"
              placeholder="Mobile"
              value={formdata.mobile}
              onChange={(e) => {
                setFormdata({ ...formdata, mobile: e.target.value });
              }}
            />
            {error.mobile && <p style={{ color: 'red' }}>Mobile is required</p>}

            <div className={Signupstyle.checked}>
              <input
                type="checkbox"
                id="check"
                checked={formdata.toc}
                onChange={(e) => {
                  setFormdata({ ...formdata, toc: e.target.checked });
                }}
              />
              <label
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.8em",
                  // marginTop:'6vh'
                }}
                htmlFor="check"
              >
                Share my registration data with Superapp
              </label>
            </div>
            {error.toc && (
              <p style={{ color: 'red' }}>
                Please accept the terms and conditions
              </p>
            )}
            <button className={Signupstyle.button} onClick={handleSubmit}>
              SIGN UP
            </button>
          </form>
          <h6
            style={{
              color: "white",
              fontFamily: "roboto",
              fontWeight: "300",
              fontSize: "0.8rem",
            }}
          >
            By clicking on Sign up you agree to Superapp{" "}
            <span style={{ color: "rgb(114,219,115)" }}>
              Terms and <br />
              Conditions of Use
            </span>
          </h6>
          <h6
            style={{
              color: "white",
              fontFamily: "roboto",
              fontWeight: "300",
              marginTop: "4vh",
              fontSize: "0.8rem",
            }}
          >
            To learn more about how Superapp collects, uses, shares and <br />
            protects your personal data please head Superapp{" "}
            <span style={{ color: "rgb(114,219,115)" }}>Privacy Policy</span>
          </h6>
        </div>
      </div>
    </>
  );
}

export default Signup;
