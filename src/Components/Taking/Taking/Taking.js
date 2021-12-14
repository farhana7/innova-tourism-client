import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Taking.css";

const Taking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { user } = useAuth();
  // const email = sessionStorage.getItem("email");

  useEffect(() => {
    fetch(`http://localhost:4200/provides/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // data.email = email;
    fetch("http://localhost:4200/confirmOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // if (result.insertedId) {
        //   alert("trips booking proccessed successfully");
        //   //clearTheCart();//clearTheForm();
        //   reset();
        // }
        console.log(result);
        //console.log(result);
      });
  };

  return (
    <div>
      <h1 className="text-green-900 font-bold italic text-6xl mt-5">
        Take a Tour
      </h1>
      <div className="flex items-center justify-between mt-5">
        <div>
          <h2 className="text-red-900 font-semibold text-4xl mt-5">
            Details of : {service.name}
          </h2>

          <h2 className="text-gray-500 font-semibold text-4xl mt-10">
            This is for taking a Trip No. : {serviceId}
          </h2>
          <br />
          <div className="flex items-center justify-between mt-10">
            <img className="w-72 h-72" src={service.img} alt="" />

            <p>{service.description}</p>
            {/* <p className="px-3 font-bold"> Price : {service.price}</p> */}
          </div>
        </div>
        <div className="taking-form bg-yellow-100">
          <form
            className="taking-form bg-yellow-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input defaultValue={user.displayName} {...register("name")} />
            {user.email && (
              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
            )}
            {service.name && (
              <input
                defaultValue={service.name}
                {...register("service", { required: true })}
              />
            )}
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input
              placeholder="Phone number"
              defaultValue=""
              {...register("phone")}
            />

            <input type="submit" />
          </form>
          <h2 className="text-gray-900 text-4xl font-bold">
            Place Your Order here
          </h2>
        </div>
        <br />
        {/* <img
        className="w-full"
        src="https://dotravel.com/uploads/articles/67/scenic-train-rides-in-europe-feature.jpg"
        alt=""
      /> */}
      </div>
    </div>
  );
};

export default Taking;
