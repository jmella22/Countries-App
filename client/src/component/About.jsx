import React from "react";
import S from "./Styles/About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={S.container}>
      <div className={S.contT}>
        <h2 className={S.T}>Countries App</h2>
      </div>
      <div>
        <div className={S.card}>
          <p className={S.txt}>
            Este proyecto se trata de una SPA (Single Page Aplication) que
            consume la información de una API externa de países.
          </p>
          <p className={S.txt}>
            Fue elavorado usando las tecnologias de React, Redux, Nodejs,
            Express, SequaliZe, PostgreSQL.
          </p>
          <p className={S.txt}>
            Esta App te permitira conocer la ifnromación más relevante de cada
            pais del mundo, así como agregar actividades turisticas a uno o
            varios paises.
          </p>
          <p className={S.txt}>¡¡ Muchas Gracias !!</p>
        </div>
      </div>
      <div>
        <Link to={"/"}>
          <button className={S.btnR}>Return </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
