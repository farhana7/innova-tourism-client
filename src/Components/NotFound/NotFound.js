import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        style={{ width: "100%" }}
        src={
          "https://img.freepik.com/free-vector/404-page-found-vector-template-with-crying-pinguin_116137-1670.jpg?size=626&ext=jpg"
        }
        alt=""
      />
      <Link to="/">
        <button className=" w-full h-12 bg-blue-900 text-white font-bold">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
