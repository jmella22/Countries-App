import React from "react";

const Card = ({ name, flag, id, countinent }) => {
  <div>
    <div>
      <img src={flag} alt="bandera del pais" />
    </div>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <h3>{countinent}</h3>
    </div>
    <div>
      <button to={`/detail/${id}`}>more info</button>
    </div>
  </div>;
};

export default Card;
