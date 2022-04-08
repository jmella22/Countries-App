import React from "react";
import { NavLink } from "react-router-dom";

import S from "./Styles/card.module.css";

export default function Card({ name, flag, id, continent }) {
  return (
    <div className={S.container}>
      <div className={S.containerIng}>
        <NavLink to={`/detail/${id}`}>
          <img className={S.img} src={flag} alt={`Bandera de ${S.name}`} />
        </NavLink>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <h3>{continent}</h3>
      </div>
    </div>
  );
}

//export default Card;
