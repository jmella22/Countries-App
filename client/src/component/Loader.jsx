import React from "react";
import S from "./Styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={S.container}>
      <div className={S.card}>
        <h2 className={S.txt}>The page is loading</h2>
      </div>
    </div>
  );
};

export default Loader;
