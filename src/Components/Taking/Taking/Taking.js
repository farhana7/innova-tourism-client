import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Taking.css";

const Taking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/provides/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/provides", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringyfy(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("trips booking proccessed successfully");
          //clearTheCart();//clearTheForm();
          reset();
        }
        //console.log(result);
      });
  };

  return (
    <div>
      <h2 className="text-red-900 font-semibold text-4xl mt-5">
        Details of : {service.name}
      </h2>
      <h2 className="text-green-900 font-semibold text-4xl mt-5">
        This is for taking a Trip : {serviceId}
      </h2>
      <br />
      <br />
      <br />
      <form
        className="taking-form bg-yellow-100"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input defaultValue={user.displayName} {...register("name")} />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input
          placeholder="Phone number"
          defaultValue=""
          {...register("phone")}
        />

        <input type="submit" />
      </form>
      <br />
      {/* <img
        className="w-full"
        src="https://dotravel.com/uploads/articles/67/scenic-train-rides-in-europe-feature.jpg"
        alt=""
      /> */}
    </div>
  );
};

export default Taking;
