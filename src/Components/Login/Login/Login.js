import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import useFirebase from "../../../hooks/useFirbase";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, singInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle(location, history);
  };

  // //hook form---------------->>>>>>>
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const { user } = useAuth();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  // console.log("came from", location.state?.from);

  // const handleGoogleLogin = () => {----------------->>>>
  //   singInUsingGoogle().then((result) => {
  //     history.push(redirect_uri);
  //   });
  // };

  // const { user, singInUsingGoogle } = useFirebase();

  return (
    <div className="login-form">
      <div className="bg-yellow-100">
        <h2 className="text-gray-900 text-4xl font-bold">Please Login</h2>
        <br />

        <form onSubmit={handleLoginSubmit}>
          <input
            placeholder="Name"
            defaultValue={user.displayName}
            label="Your Name"
            name="name"
            onChange={handleOnChange}
          />

          <input
            // style={{ width: "75%", m: 1 }}
            placeholder="Email"
            defaultValue={user.email}
            id="standard-basic"
            label="Your Email"
            name="email"
            onChange={handleOnChange}
          />
          <input
            // style={{ width: "75%", m: 1 }}
            placeholder=" Password"
            id="standard-basic"
            label="Your password"
            name="password"
            onChange={handleOnChange}
          />
          <input
            // style={{ width: "75%", m: 1 }}
            placeholder=" Address"
            id="standard-basic"
            label="Your address"
            name="address"
            onChange={handleOnChange}
          />
          <input
            // style={{ width: "75%", m: 1 }}
            placeholder="Phone Number"
            id="standard-basic"
            label="Phone Number"
            name="number"
            onChange={handleOnChange}
          />
          <input
            // style={{ width: "75%", m: 1 }}
            placeholder="City"
            id="standard-basic"
            label="City"
            name="city"
            onChange={handleOnChange}
          />

          {/* <input
            placeholder="Your Password"
            {...register("Your Password", { required: true })}
          /> */}
          {/* {errors.email && <span className='error'>This field is required</span>} */}
          {/* <input
            placeholder="Address"
            defaultValue=""
            {...register("Address")}
          /> */}
          {/* <input placeholder="City" defaultValue="" {...register("City")} />
          <input
            placeholder="Phone Number"
            defaultValue=""
            {...register("Phone Number")}
          /> */}

          <input type="submit" />
        </form>

        <br />

        {/* <form>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" />
          <br />
          <input type="submit" value="Submit" />
        </form> */}
        <p>
          new to Innova Tourism's website ?{" "}
          <Link to="/register"> Create Account</Link>
        </p>
        <br />
        <div>--------------or--------------</div>
        <br />
        <button
          className="w-64 h-12 bg-yellow-300"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
