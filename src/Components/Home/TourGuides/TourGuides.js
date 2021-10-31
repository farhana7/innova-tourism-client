import React from "react";
import TourGuide from "../TourGuide/TourGuide";

const tourGuides = [
  {
    id: 1,
    name: "William",
    img: "https://i0.wp.com/www.amsterdamredlightdistricttour.com/wp-content/uploads/2018/06/Amsterdam-Red-Light-District-Audio-Tour.jpeg?fit=800%2C533&ssl=1",
  },
  {
    id: 2,
    name: "Jonathon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBbekSzYdNqZY6P7AVyXaSREg2btruwzJ2g&usqp=CAU",
  },
  {
    id: 3,
    name: "Sarang",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/04/1b/6f/85/nok-thai-tour-private.jpg",
  },
];

const TourGuides = () => {
  return (
    <div className="container">
      <h2 className="text-green-700 m-20 font-bold text-4xl ">
        Our Tour Guides
      </h2>
      <div className="guides-container">
        {tourGuides.map((tourguide) => (
          <TourGuide key={tourguide.id} tourguide={tourguide}></TourGuide>
        ))}
      </div>
      <div>
        <br />
        <br />
        <br />
        <h2 className="text-green-700 m-20 font-bold text-4xl ">
          Our Sponsors
        </h2>
        <br />
        <img
          className="w-full h-52"
          src="https://wssef.org/wp-content/uploads/2017/01/Sponsors-Logo-Group.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TourGuides;
