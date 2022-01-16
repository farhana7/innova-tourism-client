import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../hooks/useAuth";
import Service from "../Home/Service/Service";
import Services from "../Home/Services/Services";

const MyOrders = () => {
  const { serviceId } = useParams();
  const email = sessionStorage.getItem("email");
  const [services, setServices] = useState([]);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  console.log(user, email);

  useEffect(() => {
    const url = `http://localhost:4200/myOrders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [user.email]);
  // console.log(orders);

  // useEffect(() => {
  //   fetch(`https://localhost:4200/myOrders`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       const myOrd = result.filter((order) => order.Email === user.email);
  //       setOrders(myOrd);
  //     });
  // }, [user.email]);

  // useEffect(() => {
  //   fetch(`http://localhost:4200/provides/${serviceId}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const handleDelete = (id) => {
    // console.log(id);
    const url = `http://localhost:4200/deleteOrder/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are you sure you want to delete ?");
          const remaining = services.filter((product) => product._id !== id);
          setServices(remaining);
        }
      });
  };

  return (
    <div>
      <h1 className="text-green-900 font-bold italic text-6xl mt-20">
        My Orders
      </h1>

      {services.map((service) => (
        <div className="flex items-center justify-between mt-10">
          <h2 className="text-red-900 font-semibold text-4xl mt-5">
            {service.name}
          </h2>
          <img className="w-72 h-72" src={service.img} alt="" />

          <h2 className="text-red-900 font-semibold text-4xl mt-5">
            Details of : {service.service}
          </h2>
          {/* <h2 className="text-gray-500 font-semibold text-4xl mt-10">
            This is for taking a Trip No. : {serviceId}
          </h2> */}
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
