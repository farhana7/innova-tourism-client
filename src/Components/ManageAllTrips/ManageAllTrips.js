import React, { useEffect, useState } from "react";

const ManageAllTrips = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/provides")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/provides/${id}`;
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
      <h2 className="text-green-900 font-semibold text-4xl">
        Manage all Tours / Trips
      </h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          {/* <button
            className="w-64 h-12 bg-green-300"
            onClick={() => handleDelete(service._id)}
          >
            Update
          </button> */}
          <br />
          <br />
          <button
            className="w-64 h-12 bg-yellow-300"
            onClick={() => handleDelete(service._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageAllTrips;
