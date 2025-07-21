import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const InputForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    phonenumber: "",
  });
  const { email, password, username, phonenumber } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
      phonenumber: "",
    });
  };

  return (
    <div className="form_container text-center m-4 p-4">
      <h2 className="mb-4 pb-2">Enter below details to Signup</h2>
      <div className="container fw-semibold">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6" style={{ height: "350px" }}>
            <form className="border pt-3" onSubmit={handleSubmit}>
              <div className="m-3">
                <label className="me-3 fs-5" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="xyz@abc.com"
                  onChange={handleOnChange}
                  style={{width:"400px"}}
                />
              </div>
              <div className="m-3">
                <label className="me-3 fs-5" htmlFor="email">
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="@abckh"
                  onChange={handleOnChange}
                  style={{width:"300px"}}
                />
              </div>
              <div className="m-3">
                <label className="me-3 fs-5" htmlFor="email">
                  Phone Number:
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  value={phonenumber}
                  placeholder="9192xxxxxx"
                  onChange={handleOnChange}
                  style={{width:"300px"}}
                />
              </div>
              <div className="m-3">
                <label className="me-3 fs-5" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="abc123***"
                  onChange={handleOnChange}
                  style={{width:"300px"}}
                />
              </div>
              <button
                className="btn btn-primary mt-4 p-2 fs-5 mb-3"
                style={{ width: "30%", height: "50px", margin: "0 auto" }}
              >
                Submit
              </button>
              <br />
              <div className="mb-5">
                Already have an account? <Link to={"/login"}>Login</Link>
              </div>
            </form>
            <ToastContainer />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
