import React from "react";
import { Link } from "react-router-dom";
import S from "./Styles/Page404.module.css";

const Page404 = () => {
  return (
    <div className={S.container}>
      <div>
        <Link to={"/"}>
          <button className={S.btn}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
