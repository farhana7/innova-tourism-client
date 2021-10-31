import React from "react";

const TourGuide = ({ tourguide }) => {
  const { name, img } = tourguide;

  return (
    <div className="doctor pb-3">
      <img className="doc m-auto" src={img} alt="" width="10%" />
      <h3 className="text-2xl">{name}</h3>
    </div>
  );
};

export default TourGuide;
