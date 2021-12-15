import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../hooks/useAuth";
import Service from "../Home/Service/Service";
import Services from "../Home/Services/Services";

const MyOrders = () => {
  const { serviceId } = useParams();
  const { user } = useAuth();
  const email = sessionStorage.getItem("email");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:4200/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4200/provides/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4200/deleteOrder/${id}`, {
      mrthod: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id);
  };

  return (
    <div>
      <h1 className="text-green-900 font-bold italic text-6xl mt-5">
        My Orders
      </h1>

      {services.map((service) => (
        <div className="flex items-center justify-between mt-10">
          <img className="w-72 h-72" src={service.img} alt="" />
          <h2 className="text-red-900 font-semibold text-4xl mt-5">
            Details of : {service.name}
          </h2>
          <h2 className="text-gray-500 font-semibold text-4xl mt-10">
            This is for taking a Trip No. : {serviceId}
          </h2>
          <p>{service.description}</p>
          <button
            onClick={() => handleDelete(service._id)}
            className="w-48 h-12 bg-yellow-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
