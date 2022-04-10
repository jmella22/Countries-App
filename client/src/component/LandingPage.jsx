import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNameUser } from "../redux/action";
import S from "./Styles/LandingPage.module.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameUser(user));
    alert(`Ingreso Exitoso Bienvenido ${user}`);
    setUser("");
    navigate("/Home");
  };

  return (
    <div className={S.container}>
      <div>aqui va menu de landingPage</div>
      <div>
        <input
          value={user}
          type="text"
          placeholder="Name..."
          onChange={(e) => handleInputChange(e)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
