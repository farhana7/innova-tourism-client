import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  //hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-form">
      <div>
        <h2 className="text-gray-900 text-4xl font-bold">
          Register : Create Account
        </h2>
        <br />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" defaultValue="" {...register("Name")} />
          <input
            placeholder="Email"
            defaultValue=""
            {...register("Your Email", { required: true })}
          />

          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Your Password"
            {...register("Your Password", { required: true })}
          />
          <input
            placeholder="Re-enter Password"
            {...register("Re-enter Password", { required: true })}
          />
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
