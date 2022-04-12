import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNameUser } from "../redux/action";
import S from "./Styles/LandingPage.module.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setUser({ ...user, name: e.target.value });
  };
  const handlePassChange = (e) => {
    e.preventDefault();
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameUser(user));
    alert(`Ingreso Exitoso ${user.name}`);
    setUser({ name: "", password: "" });
    navigate("/Home");
  };

  return (
    <div className={S.container}>
      <div>
        <nav>
          <Link to={"#"}>About</Link>
          <Link to={"#"}>Link de algo</Link>
          <Link to={"#"}>Link de algo</Link>
        </nav>
      </div>
      <div className={S.contlogin}>
        <div className={S.login}>
          <div className={S.loginData}>
            <h2 className={S.title}>Login</h2>
            <form className={S.formulario} onSubmit={(e) => handleSubmit(e)}>
              <div className={S.loginInput}>
                <input
                  className={S.inputxt}
                  value={user.name}
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className={S.loginInput}>
                <input
                  className={S.inputxt}
                  value={user.password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handlePassChange(e)}
                  required
                />
              </div>
              <div className={S.contbtn}>
                <input type="submit" value={"Start"} className={S.btn} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
