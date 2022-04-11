import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import S from "./Styles/Navbar.module.css";

const Navbar = () => {
  const { user } = useSelector((state) => state);

  return (
    <div className={S.container}>
      <div className={S.cont}>
        <div>
          <Link to={"/Home"} className={S.contbtn}>
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to={"/Activity/create"} className={S.contbtn}>
            <button>Create Activity</button>
          </Link>
        </div>
      </div>
      <div className={S.cont}>
        <div>
          <h2>{`Bienvendio: ${user.name}`}</h2>
        </div>
        <Link to={"/"} className={S.contbtn}>
          <button className={S.btnLo}>Log Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
