import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(field, value, newLoginData);
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  // //hook form
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const { user } = useAuth;
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="register-form">
      <div className="bg-yellow-100">
        <h2 className="text-gray-900 text-4xl font-bold">
          Register : Create Account
        </h2>
        <br />

        <form onSubmit={handleLoginSubmit}>
          <input
            placeholder=" Your Name"
            defaultValue=""
            name="name"
            onBlur={handleOnBlur}
          />
          <input
            placeholder="Your Email"
            defaultValue=""
            name="email"
            type="email"
            onBlur={handleOnBlur}
          />

          {/* {errors.email && (
            <span className="error">This field is required</span>
          )} */}
          <input
            placeholder="Your Password"
            type="password"
            name="password"
            onBlur={handleOnBlur}
          />
          <input
            placeholder="Re-enter Password"
            type="password"
            name="password2"
            onBlur={handleOnBlur}
          />
          <input placeholder="Address" name="address" defaultValue="" />
          <input placeholder="City" defaultValue="" name="city" />
          <input placeholder="Phone Number" defaultValue="" />

          <input type="submit" />
        </form>

        <br />

        {/* <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form> */}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <br />
        <div>-----------------or-----------------</div>
        <br />
        <button className="w-64 h-12 bg-yellow-300">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
