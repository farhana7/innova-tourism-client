import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, description, img } = service;

  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3 className="text-3xl">{name}</h3>
      <p className="px-3">{description.slice(0, 500)}</p>

      <Link to={`/taking/${_id}`}>
        <button className="w-full h-7 bg-red-800 text-white" to="/service">
          Take a {name.toLowerCase()} trip
        </button>
      </Link>
    </div>
  );
};

export default Service;
