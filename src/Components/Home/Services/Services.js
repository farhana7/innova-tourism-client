import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://shrieking-wizard-86176.herokuapp.com/provides")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <h1 className="text-4xl m-14 text-green-900 font-bold ">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};
<hr />;

export default Services;
