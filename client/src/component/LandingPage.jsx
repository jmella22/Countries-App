import React from "react";
import { NavLink } from "react-router-dom";
import S from "./Styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={S.container}>
      <div>aqui va menu de landingPage</div>
      <div>
        <NavLink to="/Home">
          <h2>ACCESS TO THE APP</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
