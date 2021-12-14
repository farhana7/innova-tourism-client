import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Service from "../Home/Service/Service";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/takings?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/takings?email=${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are you sure you want to delete ?");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h2>My Orders : {orders.length}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}

        <button onClick={handleDelete}></button>
      </div>
    </div>
  );
};

export default MyOrders;