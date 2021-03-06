import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirbase";
import "./AddNewService.css";

const AddNewService = () => {
  const user = useFirebase();
  // const user = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:4200/provides", {
      method: "POST",
      headers: { "conten-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);

    axios
      .post("https://shrieking-wizard-86176.herokuapp.com/provides", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
        //   console.log(res);
      });
  };

  return (
    <div className="add-service">
      <br />
      <br />
      <br />
      <h2 className="text-green-900 font-semibold text-4xl">
        Please Add a New Service
      </h2>
      <br />
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder=" Image url" />
        <input type="submit" />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddNewService;
