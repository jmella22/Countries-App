import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/Home"}>
        <button>Home</button>
      </Link>
      <Link to={"/Activity/create"}>
        <button>Create Activity</button>
      </Link>
      <Link to={"/"}>
        <button>Log Out</button>
      </Link>
    </div>
  );
};

export default Navbar;
