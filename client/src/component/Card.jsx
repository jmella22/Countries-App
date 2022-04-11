import React from "react";
import { NavLink } from "react-router-dom";

import S from "./Styles/card.module.css";

const Card = ({ name, flag, id, continent }) => {
  return (
    <div className={S.container}>
      <div className={S.containerImg}>
        <NavLink to={`/detail/${id}`}>
          <img className={S.img} src={flag} alt={`Bandera de ${S.name}`} />
        </NavLink>
      </div>
      <div className={S.contxt}>
        <div>
          <h2>{name}</h2>
          <h3>{continent}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
