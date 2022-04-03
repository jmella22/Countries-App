import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <NavLink to="/home">
        <h2>ACCESS TO THE APP</h2>
      </NavLink>
    </div>
  );
};

export default LandingPage;
