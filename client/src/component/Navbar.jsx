import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import S from "./Styles/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  const handleHome = (e) => {
    navigate("/Home");
  };

  return (
    <div className={S.container}>
      <div className={S.cont}>
        <div className={S.contbtn}>
          <button className={S.btnDr} onClick={(e) => handleHome(e)}>
            Home
          </button>
        </div>
        <div>
          <Link to={"/Activity/create"} className={S.contbtn}>
            <button className={S.btnDr}>Create Activity</button>
          </Link>
        </div>
      </div>
      <div className={S.cont}>
        <div>
          <h2 className={S.user}>{`Bienvendio: ${user.name}`}</h2>
        </div>
        <Link to={"/"} className={S.contbtn}>
          <button className={S.btnLo}>Log Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
