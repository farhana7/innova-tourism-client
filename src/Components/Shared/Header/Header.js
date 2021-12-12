import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import useFirebase from "../../../hooks/useFirbase";

const Header = () => {
  const { user, logOut } = useAuth();
  // const { user, logOut } = useFirebase();

  return (
    <div>
      <div className=" bg- bg-green-800 h-12 flex items-center justify-between text-white">
        <h1 className="text-white font-bold text-5xl">Innova Tourism</h1>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
        <NavLink to="/services">
          <button>Services</button>
        </NavLink>
        <NavLink to="/addNewService">
          <button>Add a New Service</button>
        </NavLink>
        <NavLink to="/manageAllTrips">
          <button>Manage All Trips</button>
        </NavLink>
        <NavLink to="/myOrders">
          <button>MY Orders</button>
        </NavLink>
        {user?.email ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        )}
        <>
          Signed in as: <a href="/#login">{user?.displayName}</a>
        </>
      </div>
    </div>
  );
};

export default Header;
