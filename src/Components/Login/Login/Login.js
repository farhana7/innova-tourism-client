import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import useFirebase from "../../../hooks/useFirbase";
import "./Login.css";

const Login = () => {
  const { singInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  //hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log("came from", location.state?.from);

  const handleGoogleLogin = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  // const { user, singInUsingGoogle } = useFirebase();

  return (
    <div className="login-form">
      <div className="bg-yellow-100">
        <h2 className="text-gray-900 text-4xl font-bold">Please Login</h2>
        <br />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Name"
            defaultValue={user.displayName}
            {...register("Name")}
          />
          <input
            placeholder="Email"
            defaultValue={user.email}
            {...register("Your Email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Your Password"
            {...register("Your Password", { required: true })}
          />
          {/* {errors.email && <span className='error'>This field is required</span>} */}
          <input
            placeholder="Address"
            defaultValue=""
            {...register("Address")}
          />
          <input placeholder="City" defaultValue="" {...register("City")} />
          <input
            placeholder="Phone Number"
            defaultValue=""
            {...register("Phone Number")}
          />

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
        <button className="w-64 h-12 bg-yellow-300" onClick={handleGoogleLogin}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
