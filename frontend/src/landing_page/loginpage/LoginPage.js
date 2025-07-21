import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
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
    });
  };

  return (
    <div className="container">
      <h2 className="text-center m-5 p-5 pb-2 mb-2">Login to your Account</h2>
      <div className="row fw-semibold">
        <div className="col-4"></div>
        <div
          className="col-4 form_container border my-4 py-4 text-center"
          style={{ height: "300px" }}
        >
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                className="mb-3 ms-3"
                style={{ width: "300px" }}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                className="mb-3 ms-3"
              />
            </div>
            <button
              className="btn btn-primary mt-4 p-2 fs-5 mb-3"
              style={{ width: "30%", height: "50px", margin: "0 auto" }}
            >
              Submit
            </button>{" "}
            <br />
            <span>
              Do not have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default LoginPage;
